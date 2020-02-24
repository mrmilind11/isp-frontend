import { IspDatabaseService } from './../../services/isp-database.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit, OnDestroy {
  /************************************************ Constructor **************************************/
  constructor(
    private ispDatabaseService: IspDatabaseService,
    private matSnackBar: MatSnackBar
  ) { }
  /************************************************ Properties ***************************************/
  public totalApiHit: number = 0;
  public totalISPCount: number = 0;

  private getISPCountSub = new Subscription();
  private getApiHitSub = new Subscription();
  /************************************************ Methods ******************************************/
  ngOnInit() {
    this.getISPCount();
    this.getApiCount();
  }
  ngOnDestroy() {
    this.getISPCountSub.unsubscribe();
    this.getApiHitSub.unsubscribe();
  }

  private getISPCount() {
    this.getISPCountSub = this.ispDatabaseService.fetchTotalISPCount().pipe(take(1)).subscribe((response) => {
      this.totalISPCount = response.totalISPCount;
    }, () => {
      this.matSnackBar.open('Error occurred in fetching ISP count', undefined, { duration: 2000 });
    })
  }
  private getApiCount() {
    this.getApiHitSub = this.ispDatabaseService.fetchTotalApiHitCount().pipe(take(1)).subscribe((response) => {
      this.totalApiHit = response.totalCount;
    }, () => {
      this.matSnackBar.open('Error occurred in fetching ISP count', undefined, { duration: 2000 });
    })
  }


}
