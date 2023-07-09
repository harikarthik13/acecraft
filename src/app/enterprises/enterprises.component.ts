import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';
@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {
  //initialize an empty array
  enterpriseimages:any[]=[]
  constructor (private services:ServiceService){}
  ngOnInit(): void {
    //to get data's from the json file
    this.services.getEnterprices_card().subscribe((res)=>this.enterpriseimages=res)
  }
}
