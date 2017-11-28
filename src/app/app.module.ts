import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {MaterialModule} from "./modules/material.module";
import {CovalentModule} from "./modules/covalent.module";
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import {DataService} from "./services/data.service";
import { NavbarComponent } from './partials/navbar/navbar.component';
import { VisitExpoComponent } from './components/visit-expo/visit-expo.component';
import { ApplyComponent } from './components/apply/apply.component';
import { WinComponent } from './components/win/win.component';
import { ShowComponent } from './components/show/show.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarSmComponent } from './partials/navbar-sm/navbar-sm.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './partials/footer/footer.component';
import { WinAWeddingComponent } from './partials/win-a-wedding/win-a-wedding.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        NavbarComponent,
        VisitExpoComponent,
        ApplyComponent,
        WinComponent,
        ShowComponent,
        ContactComponent,
        NavbarSmComponent,
        GalleryComponent,
        FooterComponent,
        WinAWeddingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxImageGalleryModule,
        MaterialModule,
        CovalentModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
