import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Signal } from '../Interface/signals';
import { Category } from '../Interface/category';



@Injectable({
  providedIn: 'root'
})
export class SeñalService {
  private apiUrl: string = 'http://localhost:8080/api/signals'
  private api: string = 'http://localhost:8080/api/categories'


constructor(private httpCliente : HttpClient) { }

searchSignal() : Observable<Signal[]>{
return this.httpCliente.get<Signal[]>(`${this.apiUrl}`).pipe(
  catchError(error => of([]) )
);
}

deleteSignal(id : string){
  return this.httpCliente.delete(`${this.apiUrl}/${id}`, {});
}

getCategories() : Observable<Category[]>{
  return this.httpCliente.get<Category[]>(`${this.api}`)

}
}
