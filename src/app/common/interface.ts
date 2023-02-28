import { User } from "../models/User";

export interface State {
  root: RootState;
}

export interface RootState {
  name: string;
  users: User;
}
