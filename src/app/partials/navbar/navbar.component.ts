import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbar_items: any[] = [
    {name: "home", class:"active", link: "/"},
    {name: "visit expo", class:"", link: "/visit-expo"},
    {name: "apply to exhibit", class:"", link: "/apply"},
    {name: "gallery", class:"", link: "/gallery"},
    {name: "win a wedding", class:"", link: "/win"},
    {name: "at the show", class:"", link: "/show"},
    {name: "contact us", class:"", link: "/contact"},
  ]

  constructor(private router: Router) {
    // this.changePage(this.router.url); 
    this.router.events.subscribe((event) => {
      // console.log(event);
      let _event = event as any;
      if(_event.url) {
        for(let i of this.navbar_items) {
          if(i.link === _event.url){
            this.changePage(i);
          }
        }
      }
    });
  }

  ngOnInit() {
  }

  changePage(item) {
    for(let i of this.navbar_items) {
      if(i.name !== item.name){
        i.class = "";
      } else {
        i.class = "active";
      }
    }
  }

}
