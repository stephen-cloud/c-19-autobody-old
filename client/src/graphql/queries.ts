/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncVehicles = /* GraphQL */ `
  query SyncVehicles(
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVehicles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        make
        model
        mileage
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
      id
      make
      model
      mileage
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
