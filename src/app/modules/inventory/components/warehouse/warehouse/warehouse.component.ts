import { Component, OnInit } from '@angular/core';

import { Warehouse } from '@app/models/warehouse';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  warehouses: Warehouse[];

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit(): void {
    this.getWarehouseList();
  }
  getWarehouseList(): void{
    this.warehouseService.getWarehouses().subscribe(
      response => { this.warehouses = response;  console.log(response); }
    );
  }

  delete(id: number): void{
    this.warehouseService.deleteWarehouse(id).subscribe(data => {
      alert('Warehouse with ID ' + id + ' has been deleted');
      location.reload();
    });
  }
}
