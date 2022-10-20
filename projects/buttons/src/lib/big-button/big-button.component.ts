import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.css']
})
export class BigButtonComponent implements OnInit {
  @Input() inputText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
