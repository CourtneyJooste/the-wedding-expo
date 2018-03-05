import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {

  sponsors: any[] = [
    {image: "assets/img/sponsors/aa.png", title: "albert a marais attorneys", url: "", category: "A.N.C Contract"},
    {image: "assets/img/sponsors/bb.jpg", title: "bridesmaids boxes", url: "https://www.facebook.com/blushingbridesmaids/", category: "Bridesmaids dresses"},
    {image: "assets/img/sponsors/re.jpg", title: "royal elephant hotel & conference", url: "http://www.royalelephant.co.za/", category: "Venue"},
    {image: "assets/img/sponsors/tb.jpg", title: "the boys couture", url: "http://www.theboys.co.za/", category: "Wedding Dresses"},
    {image: "assets/img/sponsors/ww.jpg", title: "win a wedding", url: "/win", category: "Competitions"},
    {image: "assets/img/sponsors/fanaa.jpg", title: "house of fanaa", url: "https://www.facebook.com/houseoffanaa/", category: "Cutlery Hire"},
    {image: "assets/img/sponsors/ido.jpg", title: "i do creative", url: "http://www.i-do.co.za/", category: "Stationery"},
    {image: "assets/img/sponsors/kita.jpg", title: "kita fragrances", url: "https://kitafragrances.com/", category: "Fragrances"},
    {image: "assets/img/sponsors/ryno.jpg", title: "makeup by ryno", url: "https://www.facebook.com/MakeupByRyno/", category: "Makeup"},
    {image: "assets/img/sponsors/fu.jpg", title: "forever us photography", url: "http://forever-us.co.za/", category: "Videography"},
    {image: "assets/img/sponsors/rl.jpg", title: "rapid lash", url: "http://rapidlash.co.za/", category: "Gift Sets"},
    {image: "assets/img/sponsors/hc.jpg", title: "hayley clift photography", url: "http://www.hayleycliftphotography.co.za/", category: "Photography"},
  ];

  exhibitors: any[] = [
    {name: "Royal Elephant Hotel & Conference Centre", text: "On the banks of the Hennops River in Centurion, The Royal Elephant exemplifies tasteful North African elegance combined with exceptional attention to detail.", image: "assets/img/galleries/main/1.jpg", url: "http://www.royalelephant.co.za/" },
    {name: "AfricaStay", text: "AfricaStay is sponsoring the honeymoon to Zanzibar. Choose peace of mind by using AfricaStay to plan your holiday in Africa & The Indian Ocean.", image: "assets/img/sponsors/afristay.jpg", url: "http://www.africastay.co.za/" }
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
