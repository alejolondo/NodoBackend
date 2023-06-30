import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaSeñalComponent } from './pages/nueva-señal/nueva-señal.component';
import { TodasComponent } from './pages/todas/todas.component';


const routes : Routes = [
  {
    path: '', component: TodasComponent
  },
  {
    path: 'new', component: NuevaSeñalComponent
  },
  
  {
    path: '**', redirectTo: 'home'
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class SeñalesRoutingModule { }
