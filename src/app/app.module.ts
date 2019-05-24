import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    ServerInfoComponent,
    PlayerStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
