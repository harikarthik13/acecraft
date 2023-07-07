import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';
@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {
  enterpriseimages:any[]=[]
  constructor (private services:ServiceService){}
  ngOnInit(): void {
    this.services.getEnterprices_card().subscribe((res)=>this.enterpriseimages=res)
  }
}
