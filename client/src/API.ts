/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVehicleInput = {
  id?: string | null,
  make: string,
  model: string,
  mileage?: number | null,
};

export type ModelVehicleConditionInput = {
  make?: ModelStringInput | null,
  model?: ModelStringInput | null,
  mileage?: ModelIntInput | null,
  and?: Array< ModelVehicleConditionInput | null > | null,
  or?: Array< ModelVehicleConditionInput | null > | null,
  not?: ModelVehicleConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateVehicleInput = {
  id: string,
  make?: string | null,
  model?: string | null,
  mileage?: number | null,
};

export type DeleteVehicleInput = {
  id?: string | null,
};

export type ModelVehicleFilterInput = {
  id?: ModelIDInput | null,
  make?: ModelStringInput | null,
  model?: ModelStringInput | null,
  mileage?: ModelIntInput | null,
  and?: Array< ModelVehicleFilterInput | null > | null,
  or?: Array< ModelVehicleFilterInput | null > | null,
  not?: ModelVehicleFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateVehicleMutationVariables = {
  input: CreateVehicleInput,
  condition?: ModelVehicleConditionInput | null,
};

export type CreateVehicleMutation = {
  createVehicle:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    mileage: number | null,
  } | null,
};

export type UpdateVehicleMutationVariables = {
  input: UpdateVehicleInput,
  condition?: ModelVehicleConditionInput | null,
};

export type UpdateVehicleMutation = {
  updateVehicle:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    mileage: number | null,
  } | null,
};

export type DeleteVehicleMutationVariables = {
  input: DeleteVehicleInput,
  condition?: ModelVehicleConditionInput | null,
};

export type DeleteVehicleMutation = {
  deleteVehicle:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    mileage: number | null,
  } | null,
};

export type GetVehicleQueryVariables = {
  id: string,
};

export type GetVehicleQuery = {
  getVehicle:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    mileage: number | null,
  } | null,
};

export type ListVehiclesQueryVariables = {
  filter?: ModelVehicleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVehiclesQuery = {
  listVehicles:  {
    __typename: "ModelVehicleConnection",
    items:  Array< {
      __typename: "Vehicle",
      id: string,
      make: string,
      model: string,
      mileage: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateVehicleSubscription = {
  onCreateVehicle:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    mileage: number | null,
  } | null,
};

export type OnUpdateVehicleSubscription = {
  onUpdateVehicle:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    mileage: number | null,
  } | null,
};

export type OnDeleteVehicleSubscription = {
  onDeleteVehicle:  {
    __typename: "Vehicle",
    id: string,
    make: string,
    model: string,
    mileage: number | null,
  } | null,
};
