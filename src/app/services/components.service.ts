import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detail } from '../models/detail.interface';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<Detail[]>('https://rickandmortyapi.com/api/character');
  }

  getDetailById(id:string): Observable<Detail> {
    return this.http.get<Detail>('https://rickandmortyapi.com/api/character/' + id);
  }
}
