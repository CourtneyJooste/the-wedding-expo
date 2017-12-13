import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  exhibitors: any[] = [
    {name: "fashion shows", 
      text: "Four shows each day, showcasing local designers and international bridal ranges. Thirty minutes of beautiful bridal inspiration for your big day!", 
      image: "assets/img/galleries/main/3.jpg", 
      url: "/contact",
      button: "showcase your range" },
    // {name: "exhibitor name", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", image: "assets/img/workshops/ws1.jpg", url: "http://test.com" }   
  ];

  sponsors: any[] = [
    {image: "assets/img/contact.jpg", url: "/contact"},
    {image: "assets/img/bliss.jpg", title: "test", url: "http://www.blissfloralcreations.com",
      sponsored: {
        name: "www.blissfloralcreations.com"
      }
    },
    {image: "assets/img/contact.jpg", url: "/contact"},
  ];

  competitions: any[] = [
    {name: "cake tasting", 
      text: "What is a wedding without cake. The Cake tasting will begin every hour on the hour, with a minimum of 3 different tastings. Why not take part to find a cake and flavour for your wedding? All you need to do is put your name down at the cake tasting stand to be allocated a slot. First come first serve.", 
      image: "assets/img/galleries/main/6.jpg"},
    {name: "table décor", 
      text: "Be a judge and you could stand a chance to win a fantastic prize. Visitors enter at the table decor activation area.", 
      image: "assets/img/ex-ct.jpg", 
      url: "http://www.google.com",
      button: "want to exhibit" }   
  ];


  constructor() { }

  ngOnInit() {
  }

  giefImages(imageurl: string): any {
    return {
      'background': 'url("' + imageurl + '") no-repeat center center',  
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    };
  }
}
