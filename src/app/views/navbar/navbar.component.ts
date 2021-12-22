import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div>
      <div>
        Profile
      </div>
      <div>
        Messages
      </div>
      <div>
        News
      </div>
      <div>
        Music
      </div>
      <div>
        Setting
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
