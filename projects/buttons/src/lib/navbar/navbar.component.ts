import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  @Input() buttons: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
