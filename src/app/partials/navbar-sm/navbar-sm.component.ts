import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-sm',
  templateUrl: './navbar-sm.component.html',
  styleUrls: ['./navbar-sm.component.scss']
})
export class NavbarSmComponent implements OnInit {
  @Input('sidenav') sidenav: any;

  constructor() { }

  ngOnInit() {
  }

}
