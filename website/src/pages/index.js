import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <p>Testing some stuff.</p>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap"
      }}
    >
      {data.allStrapiMovie.edges.map(document => (
        <Link
          to={`/${document.node.id}`}
          key={document.node.id}
          style={{
            flex: "0 1 30%",
            backgroundColor: "white",
            padding: 15,
            borderRadius: 3,
            margin: 15,
            border: "1px solid rgba(68, 68, 68, 0.1)",
            boxShadow: "5px 5px 5px rgba(68, 68, 68, 0.6)"
          }}
        >
          <h3>{document.node.name}</h3>
          <img
            alt={document.node.name}
            src={document.node.poster}
            style={{ objectFit: "cover", maxHeight: 300 }}
          />

          <p>{document.node.description}</p>
        </Link>
      ))}
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiMovie {
      edges {
        node {
          id
          poster
          name
          description
          rating
        }
      }
    }
  }
`;
