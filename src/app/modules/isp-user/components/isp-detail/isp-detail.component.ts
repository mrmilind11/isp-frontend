import { MatSnackBar } from '@angular/material';
import { IspDatabaseService } from './../../../shared/services/isp-database.service';
import { IspModel } from './../../../../models/isp.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'isp-detail',
  templateUrl: './isp-detail.component.html',
  styleUrls: ['./isp-detail.component.scss']
})
export class IspDetailComponent implements OnInit {
  /*************************************************** Constructor **********************************************/
  constructor(
    private ispDatabaseService: IspDatabaseService,
    private matSnackBar: MatSnackBar
  ) { }
  /*************************************************** Properties ***********************************************/
  @Input() ispData: IspModel;
  @Output() hideDetails = new EventEmitter<void>();
  /*************************************************** Methods **************************************************/
  ngOnInit() {
  }
  public hideISPDetails() {
    this.hideDetails.emit();
  }
  public downloadIspDetails() {
    this.ispDatabaseService.downloadISPDetail(this.ispData._id)
  }
  public shareIspDetail() {
    this.matSnackBar.open('This feature is currently in development', undefined, { duration: 2000 });
  }
}
