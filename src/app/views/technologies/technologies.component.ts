import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  @Input()
  title: string = '';
  @Input()
  user: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
