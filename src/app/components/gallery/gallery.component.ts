import { Component, OnInit, ViewChild, Output } from '@angular/core';	
import { Router, ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';

import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };

  categories: any[] = [
    {label: "all", value: "", index:0},

    {label: "category one", value: "one", index:1},

    {label: "category two", value: "two", index:2},

    {label: "category three", value: "three", index:3},

    {label: "category four", value: "four", index:4}
  ];
  // gallery images
  images: GALLERY_IMAGE[] = [
  ];

  image_thumbs: any[] = [
    {
      url: "assets/img/galleries/main/1.jpg", 
      title: 'royal elephant hotel & conference centre',
      category: "win",
      id: 0,
    },
    {
      url: "assets/img/sponsors/tb.jpg", 
      title: 'the boys couture',
      category: "win",
      id: 1,
    },
    {
      url: "assets/img/galleries/main/3.jpg", 
      title: 'cape town fashion show',
      category: "win",
      id: 2,
    },
    {
      url: "assets/img/galleries/main/4.jpg", 
      title: 'joburg wedding expo',
      category: "win",
      id: 3,
    },
    {
      url: "assets/img/galleries/main/5.jpg", 
      title: 'durban exhibitor stand',
      category: "win",
      id: 4,
    },
    {
      url: "assets/img/galleries/main/6.jpg", 
      title: 'cake tasting competition',
      category: "win",
      id: 5,
    },
    {
      url: "assets/img/win/7.jpg", 
      title: 'win a wedding competition',
      category: "win",
      id: 6,
    },
    {
      url: "assets/img/bliss.jpg", 
      title: 'three',
      category: "stuff",
      id: 7,
      sponsored: {
        name: "www.blissfloralcreations.com"
      }
    },
    {
      url: "assets/img/ex-ct.jpg", 
      title: 'exhibitor stand cape town',
      category: "stands",
      id: 8,
    }
  ];

  images_loaded: boolean = false;

  constructor(public router: Router) { 
  }

  ngOnInit() {
    this.images = this.image_thumbs;
    this.images_loaded = true;
  }

  imageClicked(i){
    if(i == 1){
      this.router.navigate(['/contact']);
    } else {
      this.ngxImageGallery.open(i);
    }
  }
  

  changed($event){
    console.log($event);
    this.images_loaded = false;
    let index = $event.index;
    let newCat = this.categories.filter(  obj => {
      return obj.index === index;
    })[0];

    if(newCat.value === "") {
      this.images = this.image_thumbs;
      this.images_loaded = true;
    } else {
      let filteredImages = this.image_thumbs.filter( obj => {
        return obj.category === newCat.value;
      });
      this.images = filteredImages;
      this.images_loaded = true;
    }
    console.log(this.images);
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
