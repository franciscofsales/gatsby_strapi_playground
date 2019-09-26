import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const MovieTemplate = ({ data }) => (
  <Layout>
    <h1>
      {data.strapiMovie.name} ({data.strapiMovie.year})
    </h1>
    <p>IMDB rating: {data.strapiMovie.rating}</p>
    <img alt={data.strapiMovie.name} src={data.strapiMovie.poster} style={{ objectFit: "cover" }} />
    <p>{data.strapiMovie.description}</p>
  </Layout>
);

export default MovieTemplate;

export const query = graphql`
  query MovieTemplate($id: String!) {
    strapiMovie(id: { eq: $id }) {
      name
      description
      rating
      year
      rating
      poster
    }
  }
`;
