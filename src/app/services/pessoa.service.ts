import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from './types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = 'http://localhost:3000/pessoas'

  constructor(private http:HttpClient) {}

  listar(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API);
  }
}
