// eslint-disable
// this is an auto generated file. This will be overwritten

export const getMatter = `query GetMatter($id: ID!) {
  getMatter(id: $id) {
    id
    title
    description
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
    }
    nextToken
  }
}
`;
