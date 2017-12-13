import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  exhibitors: any[] = [
    {name: "fashion shows", text: "Four shows each day, showcasing local designers and international bridal ranges. Thirty minutes of beautiful bridal inspiration for your big day!", image: "assets/img/workshops/ws1.jpg", url: "http://test.com" },
    // {name: "exhibitor name", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", image: "assets/img/workshops/ws1.jpg", url: "http://test.com" }   
  ];

  sponsors: any[] = [
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
  ];

  competitions: any[] = [
    {name: "cake tasting", text: "What is a wedding without cake. The Cake tasting will begin every hour on the hour, with a minimum of 3 different tastings. Why not participate to find a cake and flavour for your wedding? To participate all you need to do is put your name down at the info desk and you will be allocated a slot.", image: "assets/img/competitions/c1.jpg"},
    {name: "table décor", text: "See top wedding suppliers put their skills to the test with spectacular table décor settings.", image: "assets/img/competitions/c1.jpg", url: "http://test.com" }   
  ];


  constructor() { }

  ngOnInit() {
  }

}
