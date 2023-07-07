import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  userUrl='https://acecraft.onrender.com/user_details'
  
  constructor() { }

public authSubject =new Subject<boolean>();
validateAuth(data:boolean){
  this.authSubject.next(data)
  console.log(data)
}
value?:boolean;
getAuthStatus(){
this.authSubject.subscribe(
  data => 
  {
    console.log('data ' + data);
    this.value= data;
    console.log('authValue '+this.value);
  }
);
return this.value;
}
}
