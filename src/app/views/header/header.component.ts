import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
    styleUrls: ['./header.component.css'],
  template: `
    <div class="header">
    <img src='https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg'>
    <a href="#s">Home</a> -
    <a href="#s">News Feed</a> -
    <a href="#s">Messages</a> -
    </div>`,
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
