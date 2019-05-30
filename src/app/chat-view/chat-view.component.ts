import { Component, OnInit, OnDestroy } from '@angular/core';
import { EcoServer } from '../classes/eco-server';
import { EcoWebApiService } from '../sevices/eco-web-api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})

export class ChatViewComponent implements OnInit {

  chat$: EcoServer[];
  chatSub: Subscription;

  constructor(
    private ecoWebApiService: EcoWebApiService
  ) { }

  ngOnInit() {
    this.showChat();
  }

  showChat() {
    this.chatSub = this.ecoWebApiService.getServerChat().subscribe(chat => this.chat$ = chat );
  }

  ngOnDestroy() {
    this.chatSub.unsubscribe();
  }
}
