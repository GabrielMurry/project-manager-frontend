import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
      startDate
      endDate
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      startDate
      endDate
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT };
