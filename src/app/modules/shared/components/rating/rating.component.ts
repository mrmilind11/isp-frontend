import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  /*************************************** Constructor ************************************/
  constructor() { }
  /*************************************** Properties *************************************/
  @Input() public value: number = 0;
  @Output() private valueChange = new EventEmitter<number>();

  @Input() private maxRating: number = 5;
  @Input() public editable = false;

  public ratingList: boolean[] = [];
  public hoveredRating = null;
  /*************************************** Methods ****************************************/
  ngOnInit() {
    this.setRatingList();
  }
  private setRatingList() {
    for (let i = 0; i < this.maxRating; i++) {
      this.ratingList[i] = this.hoveredRating !== null ? (this.hoveredRating >= i + 1) : (this.value >= i + 1);
    }
  }
  public onHoverEnter(index) {
    this.hoveredRating = index + 1;
    this.setRatingList();
  }
  public onHoverOut() {
    this.hoveredRating = null;
    this.setRatingList();
  }
  public ratingSelected(index) {
    this.valueChange.emit(index + 1);
    this.hoveredRating = null;
  }
}
