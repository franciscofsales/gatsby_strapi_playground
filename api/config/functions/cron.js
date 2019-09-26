'use strict';
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const dbconfig = require('../environments/development/database.json');
const { host, port, database } = dbconfig.connections.default.settings;
const url = `mongodb://${host}:${port}`;
/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK] [YEAR (optional)]
 */

const omdbapiKey = 'YOUR-API-KEY';

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
  '*/30 * * * *': () => {
    console.log('Running cron');
    MongoClient.connect(url, function(err, client) {

      const db = client.db(database);

      db.collection('movie')
        .find({})
        .toArray((err, movies) => {
          movies.forEach(async movie => {
            const title = movie.name;
            const data = await axios.get(
              `http://www.omdbapi.com/?apikey=${omdbapiKey}&t=${title}`
            );
            db.collection('movie').updateOne(
              { name: title },
              {
                $set: {
                  rating: data.data.imdbRating,
                  year: data.data.Year,
                  description: data.data.Plot,
                  poster: data.data.Poster
                }
              }
            );
          });
        });
    });
  }
};
