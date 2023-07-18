import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeñalesRoutingModule } from './señales-routing.module';
import { NuevaSeñalComponent } from './pages/nueva-señal/nueva-señal.component';
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
  declarations: [
    NuevaSeñalComponent,
    TodasComponent
  ],
  exports: [NuevaSeñalComponent,
  TodasComponent]
})
export class SeñalesModule { }
