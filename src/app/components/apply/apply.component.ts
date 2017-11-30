import { Component, OnInit, ViewChild } from '@angular/core';

declare var emailjs: any;
declare var swal:any;
declare var $: any;

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  @ViewChild ('captchaRef') captchaRef: any;

  sending: boolean = false;

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

  submit(){
    if(this.name !== "" && this.contact !== "" && this.company !== "" && this.selectedCategory !== "" && this.selectedExpo !== ""){
      if(this.validateEmail(this.email)){
        this.captchaRef.execute();  
      } else {
        console.log("WAT");
        swal(
          'Cannot Send Application',
          'Please enter a valid email address',
          'error'
        )
      }      
    } else {
      console.log("WAT");
      swal(
        'Cannot Send Application',
        'Please fill in all the fields',
        'error'
      )
    }
  }
  
  sendMail($event) {
    $event.preventDefault;
    if(!this.sending){
      let email = this.email;
      let name = this.name;
      let cell = this.contact;
      let company = this.company;
      let selectedCategory = this.selectedCategory;
      let selectedExpo = this.selectedExpo;
      let interested = "More than one expo: ";
      if(this.bookMore) {
        interested += "Yes";
      } else {
        interested += "No";
      }
      let opted = "Opted Out: ";
      if(this.optOut) {
        opted += "Yes";
      } else {
        opted += "No";
      }

      try{
        emailjs.init("user_kAMMKmB2yFXwzKL71IuH4");
      } catch(ex) {}
      let that = this;
      that.sending = true;
      
      let mail_options = {
        title: "Exhibitor Application from: " + name,
        subtitle: "A new application has been submitted",
        subject: "New Exhibitor Application",
        info: "Applicant Information:",
        name,
        email,
        cell,
        company: "Company: " + company,
        category: "Category: " + selectedCategory,
        expo: "Expo: " + selectedExpo,
        interested,
        opted
      };
      emailjs.send("mailjet", "twe", mail_options)
      .then(function(response) {
        
        that.email = '';
        that.name = '';
        that.contact = '';
        that.company = '';
        that.selectedCategory = '';
        that.selectedExpo = '';
        that.sending = false;
        that.optOut = false;
        that.bookMore = false;
        console.log("SENT");
        swal(
          'Application Sent!',
          'We will be in contact soon :)',
          'success'
        )        
      }, function(err) {
        console.log(err);
        swal(
          'Oops...',
          'Something went wrong, please try again',
          'error'
        )
        that.sending = false;        
      });        
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
