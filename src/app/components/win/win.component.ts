import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {

  sponsors: any[] = [
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
    {image: "assets/img/sponsors/1.jpg", title: "test", url: "http://test.com"},
  ];

  exhibitors: any[] = [
    {name: "exhibitor name", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", image: "assets/img/workshops/ws1.jpg", url: "http://test.com" },
    {name: "exhibitor name", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", image: "assets/img/workshops/ws1.jpg", url: "http://test.com" }   
  ];

  past_winners: any[] = [
    {
      image: "assets/img/winners/1.jpg", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
      names: "MATTHEW & MARISSA JONES", 
      when: "2016 winners"
    },
    {
      image: "assets/img/winners/2.jpg", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
      names: "Claudette Graham", 
      when: "2015 winner"
    },
    {
      image: "assets/img/winners/3.jpg", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
      names: "HOMER & MARGE SIMPSON", 
      when: "2014 winners"
    },
  ];

  selectedWinner: any = {
    image: "assets/img/winners/1.jpg", 
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
    names: "MATTHEW & MARISSA JONES", 
    when: "2016 winners"
  };
  
  constructor() { }

  ngOnInit() {
  }


  getBg(imageurl: string): any {
    if(imageurl){
      return {
        'background': 'url("' + imageurl + '") center center / cover no-repeat'
      };
    }
    return {};
  }
}
