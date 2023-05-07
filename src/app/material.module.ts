import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material components imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [],
  
  imports: [ 
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule ],

  exports:[
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule ]
})
export class MaterialModule { }
