/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVehicle = /* GraphQL */ `
  mutation CreateVehicle(
    $input: CreateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    createVehicle(input: $input, condition: $condition) {
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
export const updateVehicle = /* GraphQL */ `
  mutation UpdateVehicle(
    $input: UpdateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    updateVehicle(input: $input, condition: $condition) {
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
export const deleteVehicle = /* GraphQL */ `
  mutation DeleteVehicle(
    $input: DeleteVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    deleteVehicle(input: $input, condition: $condition) {
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
