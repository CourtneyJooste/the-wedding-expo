import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {

  sponsors: any[] = [
    {image: "assets/img/sponsors/aa.png", title: "albert a marais attorneys", url: ""},
    {image: "assets/img/sponsors/coming.jpg", title: "", url: "/contact"},
    {image: "assets/img/sponsors/re.jpg", title: "royal elephant hoten & conference", url: "http://www.royalelephant.co.za/"},
    {image: "assets/img/sponsors/tb.jpg", title: "the boys couture", url: "http://www.theboys.co.za/"},
    {image: "assets/img/sponsors/ww.jpg", title: "win a wedding", url: "/win"},
    {image: "assets/img/sponsors/coming.jpg", title: "", url: "/contact"},
  ];

  exhibitors: any[] = [
    {name: "Royal Elephant Hotel & Conference Centre", text: "On the banks of the Hennops River in Centurion, The Royal Elephant exemplifies tasteful North African elegance combined with exceptional attention to detail.", image: "assets/img/galleries/main/1.jpg", url: "http://www.royalelephant.co.za/" },
    // {name: "exhibitor name", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", image: "assets/img/workshops/ws1.jpg", url: "http://test.com" }   
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
