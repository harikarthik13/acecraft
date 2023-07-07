import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
})
export class SchoolComponent implements OnInit {
  imgURL="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/BK,.jpg"
  
  school_logo:any[]=[]
constructor(private service:ServiceService){}
value: string | undefined;
ngOnInit(): void {
  this.service.getSchool_logo().subscribe((res) => {
    this.school_logo = res;
  });
}
}
