import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'isp-user-container',
  templateUrl: './isp-user-container.component.html',
  styleUrls: ['./isp-user-container.component.scss']
})
export class IspUserContainerComponent implements OnInit {
  /*************************************** Constructor ******************************/
  constructor() { }
  /*************************************** Properties *******************************/
  private sidenavMode: 'side' | 'over' = 'side';
  /*************************************** Methods **********************************/
  ngOnInit() {
    this.setSideNavMode();
    this.setUpdateListener();
  }
  private setUpdateListener() {
    fromEvent(window, 'resize').pipe(debounceTime(500)).subscribe(() => {
      this.setSideNavMode();
    })
  }
  private setSideNavMode() {
    this.sidenavMode = window.screen.width <= 1400 ? 'over' : 'side';
  }

}
