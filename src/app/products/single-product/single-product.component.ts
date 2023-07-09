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
