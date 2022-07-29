import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  getFilms() {
    return this.httpClient.get<any[]>('https://ghibliapi.herokuapp.com/films/');
  }


constructor(private httpClient: HttpClient) { }

}
