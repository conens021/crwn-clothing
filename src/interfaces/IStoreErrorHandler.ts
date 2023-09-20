import { HttpError } from "http-errors";

export interface IStoreErrorHandler {
  err: any;
  rejectWithValue: (value: unknown) => unknown;
  type? : number
}
