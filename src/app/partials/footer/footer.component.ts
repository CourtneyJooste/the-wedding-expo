import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
declare var swal:any;
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    this_year: number = (new Date()).getFullYear();

    sending = false;
    bride = false;
    supplier = false;
    other = false;
    email = '';
    subType: string;

    subTypes = [
        {value: "bride / groom", id: "0e54cbe3b235df6690daa29ca03c7796"},

        {value: "exhibitor", id: "10deac4cd6c8c3f5cc64772b8443b798"},

        {value: "other", id: "f174ee2fe6335508c847cfdee587e72a"}
    ];

    // {
    //     "ListID": "0e54cbe3b235df6690daa29ca03c7796",
    //     "Name": "Brides List "
    // },
    // {
    //     "ListID": "f174ee2fe6335508c847cfdee587e72a",
    //     "Name": "Other"
    // },
    // {
    //     "ListID": "10deac4cd6c8c3f5cc64772b8443b798",
    //     "Name": "Full Exhibitor Database Categories"
    // },

    constructor( public dataService: DataService) { }

    ngOnInit() {
    }

    subscribe() {
        if (!(this.email ? this.email !== '' : false)) {
            swal(
                'Missing information',
                'Please enter your email addess',
                'warning'
            );
            return;
        }

        if (!this.validateEmail(this.email)) {
            swal(
                'Invalid email',
                'Please enter a valid email address',
                'warning'
            );
            return;
        }

        if (!this.subType) {
            swal(
                'Invalid user type',
                'Please tell us who you are',
                'warning'
            );
            return;
        }

        this.sending = true;
        this.dataService.subscribe(this.email, this.subType).then(response => {
            this.sending = false;
            this.email = '';
            this.subType = null;
            swal(
                'Subscription added',
                'We will keep you in the inner loop ;)',
                'success'
            );
        }).catch(ex => {
            swal(
                'Oops...',
                'Something went wrong, please try again',
                'error'
            );
        });

    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}
