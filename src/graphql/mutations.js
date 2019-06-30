// eslint-disable
// this is an auto generated file. This will be overwritten

export const createMatter = `mutation CreateMatter($input: CreateMatterInput!) {
  createMatter(input: $input) {
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
export const updateMatter = `mutation UpdateMatter($input: UpdateMatterInput!) {
  updateMatter(input: $input) {
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
export const deleteMatter = `mutation DeleteMatter($input: DeleteMatterInput!) {
  deleteMatter(input: $input) {
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
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
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
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
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
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
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
