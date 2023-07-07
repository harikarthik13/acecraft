import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetailsService } from 'src/services/user-details.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private user_details: UserDetailsService,
    private formBuilder: FormBuilder
  ) {

  }
  react_formRes!: FormGroup;
  Fname: FormControl | any;
  Lname: FormControl | any
  Email: FormControl | any;
  Password: FormControl | any;
  cPassword: FormControl | any;
  Radiobtn: FormControl | any;
  Dealership: FormControl | any;
  DealershipNum: FormControl | any;
  City: FormControl | any;
  State: FormControl | any;
  GSTNum: FormControl | any;
cart:any=[]

  ngOnInit(): void {
    this.Fname = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16)
    ]);
    this.Lname = new FormControl('', [
      Validators.required]);
    this.Email = new FormControl('', [
      Validators.required,

      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);

    this.Password = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')

    ]);
    this.cPassword = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
    ])
    this.Radiobtn = new FormControl('', [
      Validators.required
    ]);
    this.Dealership = new FormControl('', [
      Validators.required,
    ]);
    this.DealershipNum = new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9].{7}')
    ]);
    this.City = new FormControl('', [
      Validators.required
    ]);
    this.State = new FormControl('', [
      Validators.required
    ]); this.GSTNum = new FormControl('', [
      Validators.required
    ])



    this.react_formRes = new FormGroup({
      Fname: this.Fname,
      Lname: this.Lname,
      Email: this.Email,
      Password: this.Password,
      cPassword: this.cPassword,
      Radiobtn: this.Radiobtn,
      Dealership: this.Dealership,
      DealershipNum: this.DealershipNum,
      City: this.City,
      State: this.State,
      GSTNum: this.GSTNum,
      isLogged: this.formBuilder.control(false),
      
    });
  }

  onSubmit(form: any) {
    this.user_details.getUserDetails(form.value);    
    console.log(form.value)
  
  }

}