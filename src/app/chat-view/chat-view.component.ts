import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerChat } from '../classes/server-chat';
import { EcoWebApiService } from '../sevices/eco-web-api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})

export class ChatViewComponent implements OnInit, OnDestroy{

  chat$: ServerChat[];
  chatSub: Subscription;

  constructor(
    private ecoWebApiService: EcoWebApiService
  ) { }

  ngOnInit() {
    this.showChat();
  }

  showChat() {
    this.chatSub = this.ecoWebApiService.getServerChat().subscribe(data => this.chat$ = data);
  }

  ngOnDestroy() {
    this.chatSub.unsubscribe();
  }
}


// https://stackblitz.com/edit/json-import-example