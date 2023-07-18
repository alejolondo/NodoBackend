import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../../service/homeService.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent  {

 query: string = " ";

 constructor(private service : HomeServiceService){}

  autocompletarURL() {
    this.service.saveSignal(this.query).subscribe(signal => {
      console.log("señal guardada con exito");
    })

    
  }



}
