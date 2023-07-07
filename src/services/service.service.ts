import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, acecraft_main1, acecraft_main2, school_logo,airen_mask, enterpriseimages,collegeCarousel} from 'src/models/model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService  {

  Notesurl:string='https://acecraft.onrender.com/notes'
schoollogo:string='https://acecraft.onrender.com/school_logo'
acecraft_main1:string='https://acecraft.onrender.com/acecraft_main1'
acecraft_main2:string='https://acecraft.onrender.com/acecraft_main2'
airen_mask:string='https://acecraft.onrender.com/airen_mask'
enterprises_card:string='  https://acecraft.onrender.com/enterpriseimages'
collegeCarousel:string='https://acecraft.onrender.com/collegeCarousel'

  constructor(private http:HttpClient) { }
getCarousel(){
return this.http.get<collegeCarousel[]>(this.collegeCarousel)
}
  getNotes(){
    return this.http.get<Model[]>(this.Notesurl)
  }
  getSchool_logo(){
    return this.http.get<school_logo[]>(this.schoollogo)
  }
  
  getAcecraft_main1(){
    return this.http.get<acecraft_main1[]>(this.acecraft_main1)
  }
  getAcecraft_main2(){
    return this.http.get<acecraft_main2[]>(this.acecraft_main2)
  }
  getAiren_mask(){
    return this.http.get<airen_mask[]>(this.airen_mask)
  }
  getEnterprices_card(){
    return this.http.get<enterpriseimages[]>(this.enterprises_card)
  }
 }
