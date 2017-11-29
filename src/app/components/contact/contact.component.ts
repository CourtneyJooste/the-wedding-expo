import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: String = '';
  contact: String = '';
  email: String = '';
  message: String = '';

  contacts: any[] = [
    {name: "Fransina Morake", title: "Sales Manager", email: "frans@wedding-expo.co.za", number: "073 244 0160"},
    {name: "Leane Joubert", title: "Sales Consultant", email: "leane@wedding-expo.co.za", number: "083 310 6787"},
    {name: "Marylou Bawden", title: "Exhibition Manager", email: "marylou@wedding-expo.co.za", number: "082 921 9553"},
    {name: "Janet Gericke", title: "Marketing Manager", email: "janet@wedding-expo.co.za", number: "072 357 7399"},
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
