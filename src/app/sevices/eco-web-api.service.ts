import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { EcoServer } from '../classes/eco-server';

@Injectable({
  providedIn: 'root'
})
export class EcoWebApiService {

  private serverUrl = 'http://89.163.231.54:1002';
  // private serverUrl = 'http://66.142.221.220:4001';

  constructor(
    private http: HttpClient
  ) { }

  getServerInfo(): Observable<EcoServer[]> {
    const url = `${this.serverUrl}/info`;
    return this.http.get<EcoServer['info']>(url)
      .pipe(
        catchError(this.handleError<EcoServer[]>('getInfo', []))
      );
  }
  getServerChat(): Observable<EcoServer[]> {
    const url = `${this.serverUrl}api/v1/chat`;
    return this.http.get<EcoServer['chat']>(url)
      .pipe(
        catchError(this.handleError<EcoServer[]>('getChat', []))
      );
  }
  // player stats und styles führen zu server lags
  // getServerPlayerStats(): Observable<EcoServer[]> {
  //   const url = `${this.serverUrl}/api/v1/analysis/playerstats`;
  //   return this.http.get<EcoServer['playerStats']>(url);
  // }
  // getServerPlayerStyles(): Observable<EcoServer[]> {
  //   const url = `${this.serverUrl}api/v1/analysis/playstyles`;
  //   return this.http.get<EcoServer['playerStyles']>(url);
  // }
}
/*
  https://eco-mods.com/threads/eco-web-api.79/
  https://claystk.info/help/ecoserverapi
*/
