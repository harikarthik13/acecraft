import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Cartlist } from 'src/models/cartlist';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class CartService {


  url:string='';
  cartUrl='https://acecraft.onrender.com/cart_list'
    constructor(private http:HttpClient) { 
      this.url=this.cartUrl+'/'
    }
  addToCart(product:Cartlist){
    
    this.http.post<Cartlist[]>(this.cartUrl,product).subscribe((data)=>{
      console.log(data)
    })
  }

  updateCart(product:Cartlist){
    let updateUrl=this.cartUrl+'/'+product.id
    this.http.put<Cartlist[]>(updateUrl,product).subscribe(()=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })
  
    Toast.fire({
      icon: 'success',
      title: 'Item updated successfully'
    })
  }
  )
  }
    getCartItem(){
      return this.http.get<Cartlist[]>(this.cartUrl);
    }
  
    removeCartItem(item:any){
      return this.http.delete(this.url+item.id)
    }
  
    public countSubject=new Subject<number>();
    getCount(){
      return this.getCartItem().subscribe((res)=>{
        this.countSubject.next(res.length);
        console.log(this.countSubject+'inside sub')
      })
    }
}
