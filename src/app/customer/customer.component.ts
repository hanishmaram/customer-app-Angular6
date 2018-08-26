

import { Component, OnInit } from '@angular/core';

import {KeyValueModel} from '../Models/keyvalue.model';
import { CustomerModel } from '../Models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  countries:KeyValueModel[];
  Occupations:KeyValueModel[];
  customer:CustomerModel;
  // FirstName:string;
  // LastName:string;
  // MiddleName:string;
  // Gender:string;
  // Country:string;
  // Rating:number;
  // Active:boolean;
  // DateofBirth:Date;
  // occupation:string;
  // Terms:boolean;

  constructor() { }

  ngOnInit() {
    this.countries=[];
    this.Occupations=[];
    this.countries.push({key:1,value:'India'});
    this.Occupations.push({key:1,value:'Business'});
    this.Occupations.push({key:2,value:'Public Sector'});
    this.Occupations.push({key:3,value:'Private Sector'});
    this.Occupations.push({key:4,value:'Others'});
    this.customer=new CustomerModel();
  }

  save(){
    // console.log(this.FirstName);
    // console.log(this.LastName);
    //   console.log(this.MiddleName);
    //     console.log(this.Gender);
  
    //       console.log(this.Country);
    //         console.log(this.Rating);
    //           console.log(this.Active);
    //             console.log(this.DateofBirth);
    //               console.log(this.occupation);
    //                 console.log(this.Terms);
    console.log(this.customer);
  }

}
