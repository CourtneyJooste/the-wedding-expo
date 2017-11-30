import { Component, OnInit, ViewChild } from '@angular/core';

declare var emailjs: any;
declare var swal:any;
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild ('captchaRef') captchaRef: any;

  name: String = '';
  contact: String = '';
  email: String = '';
  message: String = '';
  sending: boolean = false;

  contacts: any[] = [
    {name: "Fransina Morake", title: "Sales Manager", email: "frans@wedding-expo.co.za", number: "073 244 0160"},
    {name: "Leane Joubert", title: "Sales Consultant", email: "leane@wedding-expo.co.za", number: "083 310 6787"},
    {name: "Marylou Bawden", title: "Exhibition Manager", email: "marylou@wedding-expo.co.za", number: "082 921 9553"},
    {name: "Janet Gericke", title: "Marketing Manager", email: "janet@wedding-expo.co.za", number: "072 357 7399"},
  ]
  
  constructor() { }

  ngOnInit() {
  }

  submit() {
    if(this.name !== "" && this.contact !== "" && this.message !== ""){
      if(this.validateEmail(this.email)){
        this.captchaRef.execute();      
      } else {
        swal(
          'Cannot Send Message',
          'Please enter a valid email address',
          'error'
        )
      }      
    } else {
      swal(
        'Cannot Send Message',
        'Please fill in all the fields',
        'error'
      )
    }
  }

  

  sendMail($event) {
    $event.preventDefault;
    if(!this.sending){
      try {
        emailjs.init("user_kAMMKmB2yFXwzKL71IuH4");
      } catch(ex){}
      let email = this.email;
      let name = this.name;
      let cell = this.contact;
      let msg = this.message;
      let that = this;
      that.sending = true;

      let mail_options = {
        title: "Message Enquiry from: " + name,
        subject: "New Message Enquiry",
        info: "Other Information:",
        name,
        email,
        cell,
        "subtitle": msg,
      };
      emailjs.send("mailjet", "twe", mail_options)
        .then(response => {        
          that.email = '';
          that.name = '';
          that.contact = '';
          that.message = '';
          that.sending = false;
          swal(
            'Message Sent!',
            'We will be in contact soon :)',
            'success'
          )          
      }, err => {
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
