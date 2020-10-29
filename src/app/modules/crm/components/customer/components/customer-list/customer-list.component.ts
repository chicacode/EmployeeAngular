import { Component, OnInit } from '@angular/core';


import { Customer } from '../../../../../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  selectedCustomer: Customer;
  customers: Customer[];
  constructor( private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void{
    this.customerService.getCustomers().subscribe(
      response => {this.customers = response; console.log(response); }
    );
  }

  delete(id: number): void{
    this.customerService.deleteCustomer(id).subscribe(data => {
      alert('Customer with ID ' + id + ' has been deleted');
      location.reload();
    });
  }

}
