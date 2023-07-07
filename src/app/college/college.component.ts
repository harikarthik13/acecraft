import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit{
  collegeCarousel:any[]=[]
  constructor(private service:ServiceService){}
ngOnInit(): void {
this.service.getCarousel().subscribe((res)=>{
  this.collegeCarousel=res;
})
}
}
