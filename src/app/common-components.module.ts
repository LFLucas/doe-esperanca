import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material components module
import { MaterialModule } from './material.module';

// commmon components
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DonationPageComponent } from './donation-page/donation-page.component';
import { MinimalistCardComponent } from './minimalist-card/minimalist-card.component';




@NgModule({
  declarations: [
    ToolbarComponent,
    ContentComponent,
    CardComponent,
    FooterComponent,
    LandingPageComponent,
    HomePageComponent,
    DonationPageComponent,
    MinimalistCardComponent
  ],
  
  imports: [
    CommonModule,
    MaterialModule
  ],

  exports:[
    MaterialModule,
    ToolbarComponent,
    ContentComponent,
    CardComponent,
    FooterComponent,
    LandingPageComponent,
    HomePageComponent,
    DonationPageComponent,
    MinimalistCardComponent
  ]
})
export class CommonComponentsModule { }
