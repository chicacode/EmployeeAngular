import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '@app/models/employee';
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  @Input()  employees: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
