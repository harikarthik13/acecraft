import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { Cartlist } from 'src/models/cartlist';
import Swal from 'sweetalert2';
import { CartService } from 'src/services/cart.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  productId!: number;


  constructor(
    private productService: ProductService,
    private actRoute: ActivatedRoute,
    private cartsvc:CartService
  ) {}


  productData: any[]=[];
cart:Cartlist={
  id: 0,
  title: '',
  productCode: '',
  brand: '',
  soldBy: '',
  price: 0,
  originalPrice: 0,
  offerPercent: 0,
  gender: '',
  size:30,
  description: [],
  imgSrc: '',
  totalprice: 0,
  quantity: 1
}
quantity:number=1;
size:number | string | undefined;
addToCart(item:any){
  this.cart.id=item.id;
  this.cart.title=item.title;
  this.cart.productCode=item.productCode;
  this.cart.brand=item.brand;
  this.cart.soldBy=item.soldBy;
  this.cart.originalPrice=item.originalPrice;
  this.cart.price=item.price;
  this.cart.offerPercent=item.offerPercent;
  this.cart.gender=item.gender;
  this.cart.imgSrc=item.imgSrc;
  this.cart.quantity=this.cart.quantity;
  this.cart.description=item.description;
  this.cart.totalprice=item.totalprice;
  this.cart.size=this.cart.size;
  
  this.cartsvc.addToCart(this.cart);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  })

  Toast.fire({
    icon: 'success',
    title: 'Item added successfully'
  })
  this.cartsvc.getCount();

}
  ngOnInit() {
    this.productId = this.actRoute.snapshot.params['id'];

    this.productService
      .getProductsById(this.productId) 
      .subscribe((res) => {
        console.log(res);
        this.productData = res;
        console.log(this.productData);
      });
  }
}
