import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';
@Component({
  selector: 'app-airen-mask',
  templateUrl: './airen-mask.component.html',
  styleUrls: ['./airen-mask.component.css']
})
export class AirenMaskComponent implements OnInit{
constructor(private service:ServiceService){}
airen_mask:any[]=[]
ngOnInit(): void {
  this.service.getAiren_mask().subscribe((res)=>{this.airen_mask=res})
}
}
