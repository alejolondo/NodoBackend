import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeñalesRoutingModule } from './señales-routing.module';
import { NuevaSeñalComponent } from './pages/nueva-señal/nueva-señal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SeñalesRoutingModule,
    
  ],
  declarations: [
    NuevaSeñalComponent
  ],
  exports: [NuevaSeñalComponent]
})
export class SeñalesModule { }
