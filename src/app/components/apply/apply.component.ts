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
      name: "Rose Molteno", 
      title: "CEO & Designer of Molteno Creations", 
      text: "I just wanted to say thank you for all your hard work on creating a completely seamless expo! I'm so impressed at the amount of media coverage I've received, how perfectly the fashion show ran, and generally how well everything was organised. You guys did an amazing job this year, so pat yourselves on the back and please pass this on to all other crew. Thanks again and I'm looking forward to next year!",
      url: "assets/img/testimonials/person1.jpg"
    },
    {
      name: "Ian", 
      title: "Coffee Café", 
      text: "Thank you for everything you did right from the start. It was truly a successful opportunity and I learnt a lot in terms of exhibiting rather than trading. Thank you very much for all the advice and support. I hope to be on your team again next year.",
      url: ""
    },
    {
      name: "Bruce Kay", 
      title: "Co-fouinder, Bloom Weddings", 
      text: "As a digital wedding planning platform we (Bloom Weddings) decided to take a stand at The Wedding Expo in the hope that we could gain exposure to thousands of people in a short period of time. Our main aim was to gain a spike in users/customers on our platform. We indeed achieved our goal and more! We were pleasantly surprised at what we achieved in August 2017 and as a result have committed to all 4 shows in 2018. We found the physical presence at TWE not only helped us gain exposure, but also engaging with that amount of people helped give us the assurance that our business is very relevant and got wonderful feedback from the aspiring couples.",
      url: ""
    }
  ];

  testimonialOptions: any = {
    dots: false,
    navigation: true,
    autoplay: true,
    loop: true,
    autoplayTimeout:15000,
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
    details: "<b>PRICING</b><br><br>dependent on size of stand"},

    {name: "Cape Town", location: "CTICC", dates: "9 & 10 JUNE 2018", 
    details: "<b>PRICING</b><br><br>dependent on size of stand"},

    {name: "Durban", location: "DEC", dates: "28 & 29 JULY 2018", 
    details: "<b>PRICING</b><br><br>dependent on size of stand"},

    {name: "Johannesburg", location: "Ticketpro Dome", dates: "25 & 26 AUG 2018", 
    details: "<b>PRICING</b><br><br>dependent on size of stand"},
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
