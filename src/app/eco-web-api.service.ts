import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EcoServer } from './eco-server';

@Injectable({
  providedIn: 'root'
})
export class EcoWebApiService {
  private serverUrl = '89.163.231.54:1001/info';
  constructor(
    private http: HttpClient
  ) { }
  getServerInfo(){
    return this.http.get<EcoServer>(this.serverUrl);
  }
  
}
