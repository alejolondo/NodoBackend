import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signal } from '../Interface/signals';
import { Observable,catchError, map, of } from 'rxjs';
import { Category } from 'app/señales/Interface/category';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

private apiUrl: string = 'http://localhost:8080/api/signals'
private api: string = 'http://localhost:8080/api/categories'

constructor( private httpCliente : HttpClient ) { }

searchSignal() : Observable<Signal[]>{
return this.httpCliente.get<Signal[]>(this.apiUrl).pipe(
  catchError(error => of([]) )
);
}

saveSignal(query : string, tag: string): Observable<Signal>{
  return this.httpCliente.post<Signal>(`${this.apiUrl}/${query}/${tag}`, {});
}

getCategories() : Observable<Category[]>{
  return this.httpCliente.get<Category[]>(`${this.api}`)

}

getCategoriesById(id : number) : Observable<Category[]>{
  return this.httpCliente.get<Category[]>(`${this.api}/${id}`)

}


}
