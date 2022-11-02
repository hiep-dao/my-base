import { RoleBase } from "@/consts";

export interface IAuth {
  email: string;
  name: string;
  password: string;
}

export interface IUser {
  name: string;
  avatar: string;
  role: string;
}

export type IRole = string;
