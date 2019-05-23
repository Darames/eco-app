import { Component, OnInit } from '@angular/core';
import { EcoServer } from '../eco-server';
import { EcoWebApiService } from '../eco-web-api.service';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.scss']
})
export class ServerInfoComponent implements OnInit {
  server: EcoServer;
  constructor(
    private ecoWebApiService: EcoWebApiService
  ) { }

  ngOnInit() {
    this.showServerInfo();
  }
  showServerInfo() {
    this.ecoWebApiService.getServerInfo()
      .subscribe((data: EcoServer) => this.server = { ...data });
  }
  
}
