import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  questions: any[] = [
    {title: "one.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."},

    {title: "two.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."},

    {title: "three.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."},

    {title: "four.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."}
  ];

  testimonials: any[] = [
    {
      name: "Jane Doe", 
      title: "Person of people", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed.",
      url: "assets/img/testimonials/person1.jpg"
    },
    {
      name: "Jim Jones", 
      title: "Manager of Stuff", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed.",
      url: ""
    },
    {
      name: "Oliver Queen", 
      title: "The green arrow", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed.",
      url: ""
    }
  ];

  testimonialOptions: any = {
    dots: true,
    navigation: true,
    autoplay: true,
    loop: true,
    autoplayTimeout:5500,
    responsiveClass:true,
    responsive: {
      0 : {
        items: 1
      },
      1000 : {
        items: 1
      }
    }
  };


  plans: any[] = [
    {name: "Johannesburg", location: "Ticketpro Dome", dates: "10 & 11 march 2018", 
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br><br><br><b>PRICING<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</b><br><br><br>ADDITIONAL INFO<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},

    {name: "Cape Town", location: "CTICC", dates: "9 & 10 JUNE 2018", 
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br><br><br><b>PRICING<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</b><br><br><br>ADDITIONAL INFO<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},

    {name: "Durban", location: "DEC", dates: "28 & 29 JULY 2018", 
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br><br><br><b>PRICING<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</b><br><br><br>ADDITIONAL INFO<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},

    {name: "Johannesburg", location: "Ticketpro Dome", dates: "25 & 26 AUG 2018", 
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br><br><br><b>PRICING<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</b><br><br><br>ADDITIONAL INFO<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"},
  ];

  name: String = '';
  contact: String = '';
  email: String = '';
  company: String = '';

  selectedCategory: String = '';

  categories: String[] = [
    "Dresses",
    "Banking",
    "China",
    "Words",
    "Lorem Ipsum"
  ];

  selectedExpo: String = '';

  expos: String[] = [
    "Johannesburg March - 2018",

    "Cape Town June - 2018",

    "Durban July - 2018",

    "Johannesburg - August 2018"
  ];

  bookMore: boolean = false;
  optOut: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getBg(imageurl: string): any {
    if(imageurl){
      return {
        'background': 'url("' + imageurl + '") no-repeat center center',  
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      };
    }
    return {};
  }

}
