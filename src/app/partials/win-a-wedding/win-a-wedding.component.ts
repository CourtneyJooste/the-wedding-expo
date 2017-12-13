import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-win-a-wedding',
  templateUrl: './win-a-wedding.component.html',
  styleUrls: ['./win-a-wedding.component.scss']
})
export class WinAWeddingComponent implements OnInit {

  imageurl: string = '';
  oldnumber: number;
  images: string [] = [
    "assets/img/win/1.jpg",
    "assets/img/win/2.jpg",
    "assets/img/win/3.jpg",
    "assets/img/win/4.jpg",
    "assets/img/win/5.jpg",
    "assets/img/win/6.jpg",
    "assets/img/win/7.jpg"
  ];

  constructor() {
    if(this.oldnumber){
      console.log(this.oldnumber);
    }
    let randomnumber = Math.floor(Math.random() * (this.images.length));
    console.log(randomnumber);
    this.oldnumber = randomnumber;
    this.imageurl = this.images[randomnumber];
  }

  ngOnInit() {
  }

  giefImages(): any {
    return {
      'background': 'url("' + this.imageurl + '") no-repeat center center',  
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    };
  }

}
