import { Departman } from './departman';
import { Status } from './status';

export class Student {
  id: number;
  brojIndeksa: string;
  ime: string;
  prezime: string;
  departmanBean: Departman;
  statusBean: Status;
}
