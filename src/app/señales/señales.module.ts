import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeñalesRoutingModule } from './señales-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TodasComponent } from './pages/todas/todas.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SeñalesRoutingModule,
    HttpClientModule

  ],
  declarations: [TodasComponent
  ],
  exports: [TodasComponent]
})
export class SeñalesModule { }
