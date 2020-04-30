// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
      id
      make
      model
      mileage
    }
  }
`;
export const listVehicles = /* GraphQL */ `
  query ListVehicles(
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        make
        model
        mileage
      }
      nextToken
    }
  }
`;
