import { Component, OnInit, ViewChild } from '@angular/core';
import { Pipe } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  
  // gallery configuration
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };
	
  // gallery images
  images: GALLERY_IMAGE[] = [
  ];

  image_thumbs: any[] = [
    {
      url: "assets/img/win/7.jpg", 
      title: 'win a wedding competition',
      category: "win",
      id: 0,
    },
    {
      url: "assets/img/bliss.jpg", 
      title: 'three',
      category: "stuff",
      id: 2,
      sponsored: {
        name: "www.blissfloralcreations.com"
      }
    },
    {
      url: "assets/img/ex-ct.jpg", 
      title: 'exhibitor stand cape town',
      category: "stands",
      id: 1,
    }
  ];
  images_loaded: boolean = false;

  constructor() { 
    for (let i of this.image_thumbs) {
      let new_image = {
        url: i.url,
        title: i.title,
        altText: i.title
      };
      this.images.push(new_image);
    }
    this.images_loaded = true;
  }

  ngOnInit() {
  }

  imageClicked(i){
    this.ngxImageGallery.open(i);
  }
  
  giefImages(imageurl: string): any {
    return {
      'background': 'url("' + imageurl + '") no-repeat center center',  
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    };
  }
}