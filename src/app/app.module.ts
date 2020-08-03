import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component';
import { ContainSiteComponent } from './contain-site/contain-site.component';
import { OurBreweryComponent } from './our-brewery/our-brewery.component';
import { VisitBoxComponent } from './visit-box/visit-box.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { VisitUsComponent } from './visit-us/visit-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ContainSiteComponent,
    OurBreweryComponent,
    VisitBoxComponent,
    OurProductsComponent,
    VisitUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
