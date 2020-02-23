import { IspModel } from './../../../../models/isp.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'isp-user-container',
  templateUrl: './isp-user-container.component.html',
  styleUrls: ['./isp-user-container.component.scss']
})
export class IspUserContainerComponent implements OnInit {
  /*************************************** Constructor ******************************/
  constructor() { }
  /*************************************** Properties *******************************/
  public sidenavMode: 'side' | 'over' = 'side';
  public ispDetailData: IspModel;
  @ViewChild('ispDetailSidenav', { static: false }) private ispDetailSidenav: MatSidenav;
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
    this.sidenavMode = window.innerWidth <= 1400 ? 'over' : 'side';
  }
  public showDetails(data: IspModel) {
    this.ispDetailData = data;
    this.ispDetailSidenav.open();
  }
  public hideDetails() {
    this.ispDetailSidenav.close();
  }
}
