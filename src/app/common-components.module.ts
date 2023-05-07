import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material components module
import { MaterialModule } from './material.module';

// commmon components
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ContentComponent,
    CardComponent,
    FooterComponent
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
    FooterComponent
  ]
})
export class CommonComponentsModule { }
