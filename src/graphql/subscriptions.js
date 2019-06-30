// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateMatter = `subscription OnCreateMatter {
  onCreateMatter {
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
export const onUpdateMatter = `subscription OnUpdateMatter {
  onUpdateMatter {
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
export const onDeleteMatter = `subscription OnDeleteMatter {
  onDeleteMatter {
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
export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
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
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
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
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
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
