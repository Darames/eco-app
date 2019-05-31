import { Component, OnInit, OnDestroy } from '@angular/core';
import { EcoServer } from '../classes/eco-server';
import { EcoWebApiService } from '../sevices/eco-web-api.service';
import { Observable, Subscription } from 'rxjs';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})

export class PlayerStatsComponent implements OnInit {

  stats$: EcoServer[];
  statsSub: Subscription;
  data: object;

  constructor(
    private ecoWebApiService: EcoWebApiService
  ) { }

  ngOnInit() {
    this.showPlayerStats();
    this.getChartdata();
  }

  showPlayerStats() {
    // this.statsSub = this.ecoWebApiService.getServerPlayerStats().subscribe(stats => this.stats$ = stats );
  }
  getChartdata() {

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40, 10],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    };
    this.data = data;
  }
  ngOnDestroy() {
    this.statsSub.unsubscribe();
  }
}
