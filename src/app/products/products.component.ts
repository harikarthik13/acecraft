import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  productsList: any[] = [];


  sortParam: any;
  sortDirection: any;
  optionSelected: any;


  onOptionsSelected(event: any) {
    console.log(event.target.value); 
    this.optionSelected = event.target.value; 
    if (this.optionSelected === 'lth') {
      (this.sortParam = 'price'), (this.sortDirection = 'asc');
    } else if (this.optionSelected === 'htl') {
      (this.sortParam = 'price'), (this.sortDirection = 'desc');
    } else if (this.optionSelected === 'nasc') {
      (this.sortParam = 'title'), (this.sortDirection = 'asc');
    } else if (this.optionSelected === 'ndesc') {
      (this.sortParam = 'title'), (this.sortDirection = 'desc');
    }
  }
count_school=0;
  //Consume the ProductsService
  ngOnInit() {
    
    this.productService.getProducts().subscribe(
      (response) => {
        this.productsList = response;
        for (const x of this.productsList) {
          this.count_school++;
        }
      },

      (error) => {
        console.log('Error Occured: ' + error);
      }
    );
  }
  
}
