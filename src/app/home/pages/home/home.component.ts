import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../../service/homeService.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent  {

 query: string = " ";
 tag: string = " ";

 constructor(private service : HomeServiceService, private router:Router){}

  guardarSenal() {
    this.service.saveSignal(this.query, this.tag).subscribe(signal => {
      console.log("señal guardada con exito");
    })
    this.listaDeSenales();
  }

  listaDeSenales() {
    this.router.navigate(['/señales']);
  }
}
