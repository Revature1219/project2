import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviewstars',
  templateUrl: './reviewstars.component.html',
  styleUrls: ['./reviewstars.component.css']
})
export class ReviewstarsComponent implements OnInit {
  @Input() rating: number;
  constructor() { }
  
  ngOnInit() {
  }

}
