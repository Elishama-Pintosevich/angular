import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagesPageComponent } from './images-page/images-page.component';
import { InputsComponent } from './images-page/inputs/inputs.component';
import { ListImagesComponent } from './images-page/list-images/list-images.component';
import { ImageComponent } from './images-page/list-images/image/image.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ImgService } from './images-page/img.service';
import { LoggingService } from './images-page/logging.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagesPageComponent,
    InputsComponent,
    ListImagesComponent,
    ImageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ImgService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
