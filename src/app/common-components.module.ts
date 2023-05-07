import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material components module
import { MaterialModule } from './material.module';

// commmon components
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ContentComponent,
    CardComponent
  ],
  
  imports: [
    CommonModule,
    MaterialModule
  ],

  exports:[
    MaterialModule,
    ToolbarComponent,
    ContentComponent,
    CardComponent
  ]
})
export class CommonComponentsModule { }
