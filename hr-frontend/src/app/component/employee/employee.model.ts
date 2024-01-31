
import { Branch } from '../branch/branch.model';

export interface Employee {
  id?: number;
  name: string;
  age: number;
  email: string;
  phoneNumber: string;
  branch?: Branch;
}
