import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'señales', loadChildren: ()=> import('./señales/señales.module').then(m => m.SeñalesModule)
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
