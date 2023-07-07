import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserDetailsService } from 'src/services/user-details.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  public show: boolean = true;
  toggle() {
    this.show = !this.show;
  }
  cart_Count = 0;
  auth: boolean = false
  constructor(private cartSvc: CartService, private authService: UserService, private details: UserDetailsService,private router:Router ) { }
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    this.cartSvc.getCartItem().subscribe((res) => {
      this.cart_Count = res.length;
      console.log(this.cart_Count);
    });
    this.cartSvc.countSubject.subscribe((res) => {
      this.cart_Count = res;
      console.log(this.cart_Count)
    })
  }
  user_profile: any;
  logout() {
    this.details.getUser().subscribe((res) => {
      this.user_profile = res
       this.user_profile.find((data: any) => {
        if (data.isLogged == true) {
          this.details.isLoggedOff(data, data.id);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 400,
            timerProgressBar: true,
          })
          Toast.fire({
            icon: 'success',
            title: 'Logged successfully'
          }).then(() => {
           
            this.router.navigate(['/']);
            window.location.reload()
           }) 
        }
        return true;
      })
    })
  }
}
