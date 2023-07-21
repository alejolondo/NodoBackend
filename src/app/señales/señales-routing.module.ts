import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodasComponent } from './pages/todas/todas.component';


const routes : Routes = [
  {
    path: '', component: TodasComponent
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
