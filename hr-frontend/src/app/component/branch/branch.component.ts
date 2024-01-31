import { Component } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {
 

  id: number;
  name: string;
  building_number: string;
  street: string;
  area: string;
  city: string;
  country: string;
  manager: any;

  constructor(data: any = {}) {
    this.id = data?.id || null;
    this.name = data?.name || '';
    this.building_number = data?.building_number || '';
    this.street = data?.street || '';
    this.area = data?.area || '';
    this.city = data?.city || '';
    this.country = data?.country || '';
    this.manager = data?.manager || null;
  }
}
