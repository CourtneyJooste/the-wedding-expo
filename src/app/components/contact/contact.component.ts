import { Component, OnInit } from '@angular/core';

declare var emailjs: any;
declare var swal:any;
declare var $: any;

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

  sendMail() {
      var email = this.email;
      var name = this.name;
      var cell = this.contact;
      var msg = this.message;
      console.log("TESTING");
      emailjs.init("user_kAMMKmB2yFXwzKL71IuH4");
      let that = this;

      if(name !== "" && cell !== "" && msg !== ""){
        if(that.validateEmail(email)){
          that.sending = true;
          console.log("WE MADE IT THIS FAR");
          
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
            .then(function(response) {
              
               that.email = '';
               that.name = '';
               that.contact = '';
               that.message = '';
               that.sending = false;
               console.log("SENT");
               swal(
                'Message Sent!',
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
        } else {
          console.log("WAT");
          swal(
            'Cannot Send Message',
            'Please enter a valid email address',
            'error'
          )
        }
        
      } else {
        console.log("WAT");
        swal(
          'Cannot Send Message',
          'Please fill in all the fields',
          'error'
        )
      }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
}
