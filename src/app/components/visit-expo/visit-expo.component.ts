import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-expo',
  templateUrl: './visit-expo.component.html',
  styleUrls: ['./visit-expo.component.scss']
})
export class VisitExpoComponent implements OnInit {

  questions: any[] = [
    {title: "one.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."},

    {title: "two.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."},

    {title: "three.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."},

    {title: "four.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."}
  ]

  constructor() { }

  ngOnInit() {
  }

}
