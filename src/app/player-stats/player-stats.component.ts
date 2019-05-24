import { Component, OnInit } from '@angular/core';
import { EcoServer } from '../classes/eco-server';
import { EcoWebApiService } from '../sevices/eco-web-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {

  stats$: Observable<EcoServer[]>;

  constructor(
    private ecoWebApiService: EcoWebApiService
  ) { }

  ngOnInit() {
    this.showPlayerStats();
  }

  showPlayerStats() {
    this.stats$ = this.ecoWebApiService.getServerPlayerStats();
  }
}
