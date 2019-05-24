import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EcoServer } from '../classes/eco-server';

@Injectable({
  providedIn: 'root'
})
export class EcoWebApiService {

  private serverUrl = 'http://89.163.231.54:1002';

  constructor(
    private http: HttpClient
  ) { }

  getServerInfo(): Observable<EcoServer[]> {
    const url = `${this.serverUrl}/info`;
    return this.http.get<EcoServer['info']>(url);
  }

  getServerPlayerStats(): Observable<EcoServer[]> {
    const url = `${this.serverUrl}/api/v1/analysis/playerstats`;
    return this.http.get<EcoServer['playerStats']>(url);
  }
  getServerPlayerStyles(): Observable<EcoServer[]> {
    const url = `${this.serverUrl}api/v1/analysis/playstyles`;
    return this.http.get<EcoServer['playerStyles']>(url);
  }

}
/*
  https://eco-mods.com/threads/eco-web-api.79/
  https://claystk.info/help/ecoserverapi
*/
