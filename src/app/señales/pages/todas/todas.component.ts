import { Component, OnInit } from '@angular/core';
import { Signal } from '../../Interface/signals';
import { SeñalService } from '../../service/señal.service';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todas',
  templateUrl: './todas.component.html',
  styleUrls: ['./todas.component.css']
})
export class TodasComponent implements OnInit  {
public signals: Signal[] = [];

  constructor(private signalService: SeñalService, private router: Router) { }

  ngOnInit(): void {
  this.signalService.searchSignal().subscribe(signal => {
    this.signals = signal;
  })
  }

  delete(id : string){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la señal",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.signalService.deleteSignal(id).subscribe(dato => {
          console.log(dato);
          swal(
            'Señal eliminada',
            'La señal ha sido eliminada con exito',
            'success'
          )
        })
      }
    })
  }

  refrescarSenales(): void {
    window.location.reload();
  }

}
