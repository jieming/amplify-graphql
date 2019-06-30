// eslint-disable
// this is an auto generated file. This will be overwritten

export const getMatter = `query GetMatter($id: ID!) {
  getMatter(id: $id) {
    id
    title
    description
    projects {
      items {
        id
        title
        description
      }
      nextToken
    }
  }
}
`;
export const listMatters = `query ListMatters(
  $filter: ModelMatterFilterInput
  $limit: Int
  $nextToken: String
) {
  listMatters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      projects {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    title
    description
    matter {
      id
      title
      description
      projects {
        nextToken
      }
    }
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      matter {
        id
        title
        description
      }
    }
    nextToken
  }
}
`;
