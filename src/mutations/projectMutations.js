import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
    $startDate: String!
    $endDate: String!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
      startDate
      endDate
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
    $startDate: String!
    $endDate: String!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
      startDate
      endDate
    }
  }
`;

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };
