// import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute, Router} from '@angular/router';
// import { CartService } from 'src/services/cart.service';
// import { ProductService } from 'src/services/product.service';
// import Swal from 'sweetalert2';
// import { Cartlist } from 'src/models/cartlist';
// @Component({
//   selector: 'app-single-product',
//   templateUrl: './single-product.component.html',
//   styleUrls: ['./single-product.component.css']
// })
// export class SingleProductComponent implements OnInit {

// @Input() products: any;

// constructor(
//   private router: Router, 
//    private productService: ProductService,
//   private actRoute: ActivatedRoute,
//   private cartsvc:CartService
// ) {}
// productData: any[]=[];

// cart:Cartlist={
//   id: 0,
//   title: '',
//   productCode: '',
//   brand: '',
//   soldBy: '',
//   price: 0,
//   originalPrice: 0,
//   offerPercent: 0,
//   gender: '',
//   size:26,
//   description: [],
//   imgSrc: '',
//   totalprice: 0,
//   quantity: 1
// }
// quantity:number=1;
// size:number | string | undefined;
// addToCart(item:any){
//   this.cart.id=item.id;
//   this.cart.title=item.title;
//   this.cart.productCode=item.productCode;
//   this.cart.brand=item.brand;
//   this.cart.soldBy=item.soldBy;
//   this.cart.originalPrice=item.originalPrice;
//   this.cart.price=item.price;
//   this.cart.offerPercent=item.offerPercent;
//   this.cart.gender=item.gender;
//   this.cart.imgSrc=item.imgSrc;
//   this.cart.quantity=this.cart.quantity;
//   this.cart.description=item.description;
//   this.cart.totalprice=item.totalprice;
//   this.cart.size=this.cart.size;

//   this.cartsvc.addToCart(this.cart);
//   const Toast = Swal.mixin({
//     toast: true,
//     position: 'top',
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//   })

//   Toast.fire({
//     icon: 'success',
//     title: 'Item added successfully'
//   })
//   this.cartsvc.getCount();

// }
// public show:boolean = true;
// toggle() {
//   this.show = !this.show;

// }
// ngOnInit() {this.productId = this.actRoute.snapshot.params['id'];

// this.productService
//   .getProductsById(this.productId) 
//   .subscribe((res) => {
//     console.log(res);
//     this.productData = res;
//     console.log(this.productData);
//   });}

// productId!: number;

// viewProduct(id: number) {
//   this.productId = id;
//   this.router.navigate(['viewProduct/' + id]);
// }
// }

import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

@Input() products: any;

constructor(
  private router: Router
) {}
public show:boolean = true;
toggle() {
  this.show = !this.show;

}
ngOnInit() {}

productId!: number;

viewProduct(id: number) {
  this.productId = id;
  this.router.navigate(['viewProduct/' + id]);
}
}
