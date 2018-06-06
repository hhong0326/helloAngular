import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private dataService: DataService) {}
 
  getCustomers() {
     this.dataService.getCustomers().then(customers => this.customers = customers);
  }
 
  ngOnInit(): void {
     this.getCustomers();
  }
 
  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }
}