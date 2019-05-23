import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EcoServer } from './eco-server';

@Injectable({
  providedIn: 'root'
})
export class EcoWebApiService {
  private serverUrl = 'http://89.163.231.54:1002/info';
  constructor(
    private http: HttpClient
  ) { }
  getServerInfo(){
    return this.http.get<EcoServer>(this.serverUrl);
  }
  
}
