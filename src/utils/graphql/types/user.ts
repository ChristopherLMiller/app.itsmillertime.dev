import { iRole } from './role';

export interface iUser {
  id: string;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  role: iRole;
}
