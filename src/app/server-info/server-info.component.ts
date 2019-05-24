import { Component, OnInit } from '@angular/core';
import { EcoServer } from '../classes/eco-server';
import { EcoWebApiService } from '../sevices/eco-web-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.scss']
})
export class ServerInfoComponent implements OnInit {

  server$: Observable<EcoServer[]>;

  constructor(
    private ecoWebApiService: EcoWebApiService
  ) { }

  ngOnInit() {
    this.showServerInfo();
  }

  showServerInfo() {
    this.server$ = this.ecoWebApiService.getServerInfo();
  }

}
