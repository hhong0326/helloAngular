import { Component, OnInit } from '@angular/core';

import {Customer} from '../customer';
import {DataService} from '../data.service'

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
}) 
export class SearchCustomerComponent implements OnInit {

  lastName: string;
  customers: Customer[];
  
  constructor(private dataService: DataService) {}
 
  ngOnInit() {
    this.lastName = "";
  }
 
  onSubmit() {
    this.searchCustomers();
  }
  
  private searchCustomers() {
    this.dataService.getCustomersByLastName(this.lastName).then(customers => this.customers = customers);
  }

}