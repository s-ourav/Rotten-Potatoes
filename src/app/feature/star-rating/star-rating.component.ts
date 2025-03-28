import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() rating : any;
  @Input() isReadOnly : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
