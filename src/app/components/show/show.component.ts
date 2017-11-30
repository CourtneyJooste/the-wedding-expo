import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  exhibitors: any[] = [
    {name: "exhibitor name", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", image: "assets/img/workshops/ws1.jpg", url: "http://test.com" },
    {name: "exhibitor name", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", image: "assets/img/workshops/ws1.jpg", url: "http://test.com" }   
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
    {name: "competition name", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", image: "assets/img/competitions/c1.jpg", url: "http://test.com" },
    {name: "competition name", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", image: "assets/img/competitions/c1.jpg", url: "http://test.com" }   
  ];


  constructor() { }

  ngOnInit() {
  }

}
