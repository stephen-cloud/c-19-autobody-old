import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Vehicle {
  readonly id: string;
  readonly make: string;
  readonly model: string;
  readonly mileage?: number;
  constructor(init: ModelInit<Vehicle>);
  static copyOf(source: Vehicle, mutator: (draft: MutableModel<Vehicle>) => MutableModel<Vehicle> | void): Vehicle;
}