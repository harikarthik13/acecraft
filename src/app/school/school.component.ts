import { Component } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
  imgURL="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/BK,.jpg"
  
  school_logo = [
    {
      img: 'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/jain.jpeg',
      link:'/schooluniform',
      name:'JGI'   
     },
    {
      img: 'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/rvschool.png',
      link:'/schooluniform',
      name:'RV' 
    },
    {
      img: 'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/sophias.jpg', 
      link:'/schooluniform',
      name:'SOPHIA' 
    },
    {
      img: 'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/kumarans.png',
      link:'/schooluniform',
      name:'KUMARANS' 
    },
    {
      img: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Logo-%20New%20Horizon%20Gurukul.jpg',
      link:'/schooluniform',
      name:'NEW HORIZON GURUKUL'
    },
    {
img:'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/cgis.png',
link:'/schooluniform',
name:'CISB'
    },
    {
      img: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/NHIS%20LOGO%20Jpeg.jpg',
      link:'/schooluniform',
      name:'NHIS'
    },
  ];
}
