import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  uploadUrl: string;
    
  constructor() { }

  ngOnInit() {
    this.uploadUrl = 'http://localhost:3001/api/upload';
  }

}
