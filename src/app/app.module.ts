import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { EcoWebApiService } from './sevices/eco-web-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerInfoComponent,
    PlayerStatsComponent,
    ChatViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartjsModule
  ],
  providers: [EcoWebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
