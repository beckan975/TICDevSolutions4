import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styles: [
  ]
})
export class TitlesComponent implements OnInit {

  @Input() title: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
