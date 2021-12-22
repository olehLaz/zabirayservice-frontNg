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
        Links
      </div>
      <div>
        Posts
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
