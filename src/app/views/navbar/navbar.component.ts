import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="mat-tab-nav-bar">
      <div class="item active">
        <a>Profile</a>
      </div>
      <div class="item">
        <a>Messages</a>
      </div>
      <div class="item">
        <a>News</a>
      </div>
      <div class="item">
        <a>Music</a>
      </div>
      <div class="item">
        <a>Setting</a>
      </div>
    </div>`,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
