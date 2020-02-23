import { IspModel } from './../../../../models/isp.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'isp-detail',
  templateUrl: './isp-detail.component.html',
  styleUrls: ['./isp-detail.component.scss']
})
export class IspDetailComponent implements OnInit {
  /*************************************************** Constructor **********************************************/
  constructor() { }
  /*************************************************** Properties ***********************************************/
  @Input() ispData: IspModel;
  @Output() hideDetails = new EventEmitter<void>();
  /*************************************************** Methods **************************************************/
  ngOnInit() {
  }
  public hideISPDetails() {
    this.hideDetails.emit();
  }

}
