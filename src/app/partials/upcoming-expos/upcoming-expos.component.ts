import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-expos',
  templateUrl: './upcoming-expos.component.html',
  styleUrls: ['./upcoming-expos.component.scss']
})
export class UpcomingExposComponent implements OnInit {

  expos: any[] = [
    {name: "Johannesburg", location: "Ticketpro Dome", dates: "10 & 11 march 2018", details: "Price: <b>R120.00</b> per person<br>R30 per child (2 to 10 years)"},

    {name: "Cape Town", location: "CTICC", dates: "TBA", details: "Price: <b>R100.00</b> per person<br>R30 per child (2 to 10 years)"},

    {name: "Durban", location: "DEC", dates: "TBA", details: "Price: <b>R100.00</b> per person<br>R30 per child (2 to 10 years)"},

    {name: "Johannesburg", location: "Ticketpro Dome", dates: "TBA", details: "Price: <b>R120.00</b> per person<br>R30 per child (2 to 10 years)"},
  ];

  constructor() { }

  ngOnInit() {
  }

}