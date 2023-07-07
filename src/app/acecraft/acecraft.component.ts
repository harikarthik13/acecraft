import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';
@Component({
  selector: 'app-acecraft',
  templateUrl: './acecraft.component.html',
  styleUrls: ['./acecraft.component.css']
})
export class AcecraftComponent implements OnInit {
  acecraft_main1:any[]=[]
  acecraft_main2:any[]=[]
  constructor(private service:ServiceService){}
  
  ngOnInit(): void {
    this.service.getAcecraft_main1().subscribe((res) => {
      this.acecraft_main1 = res;
    });
    this.service.getAcecraft_main2().subscribe((res) => {
      this.acecraft_main2 = res;
    });
  }
}
