import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  constructor(private http:HttpClient) { }

  getFaturamento(){
    return this.http.get(environment.apiUrl + 'faturamento')

  }
}
