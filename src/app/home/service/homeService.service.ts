import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signal } from '../Interface/signals';
import { Observable,catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private apiUrl: string = 'http://localhost:8080/api/signals'
constructor( private httpCliente : HttpClient ) { }

searchSignal() : Observable<Signal[]>{
return this.httpCliente.get<Signal[]>('this.apiUrl').pipe(
  catchError(error => of([]) )
);
}

saveSignal(query : string){
  return this.httpCliente.post(`${this.apiUrl}/${query}`, {});
}


}
