import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  type: string;

  @Input()
  imageFileName: string;

  constructor() { }

  ngOnInit() {
  }

}
