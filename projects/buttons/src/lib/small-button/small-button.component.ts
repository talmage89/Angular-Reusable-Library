import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.css']
})
export class SmallButtonComponent implements OnInit {
  @Input() inputText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
