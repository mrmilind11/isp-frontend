import { IspDatabaseService } from './../../../shared/services/isp-database.service';
import { IspModel } from './../../../../models/isp.model';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'isp-list',
  templateUrl: './isp-list.component.html',
  styleUrls: ['./isp-list.component.scss']
})
export class IspListComponent implements OnInit, OnDestroy {
  /********************************************* Constructor ******************************************/
  constructor(
    private ispDatabaseService: IspDatabaseService
  ) { }
  /********************************************* Properties *******************************************/
  @Output() showDetails = new EventEmitter<IspModel>();
  public ispList: IspModel[] = [];
  public showLoading = false;
  public filterHash: IFilterHash = {
    searchText: '',
    sortBy: 'name',
    orderBy: 'ASC'
  }
  public sortOptionList = [
    { name: 'Name', value: 'name' },
    { name: 'Price', value: 'price' },
    { name: 'Rating', value: 'rating' }
  ];
  public orderOptionList = [
    { name: 'Ascending', value: 'ASC' },
    { name: 'Descending', value: 'DES' }
  ];
  private getISPListSub = new Subscription();
  /********************************************* Methods **********************************************/
  ngOnInit() {
    this.fetchISPList();
  }
  ngOnDestroy() {
    this.getISPListSub.unsubscribe();
  }
  private fetchISPList() {
    this.showLoading = true;
    this.getISPListSub.unsubscribe();
    this.getISPListSub = this.ispDatabaseService.fetchISPList(this.filterHash).pipe(take(1)).subscribe((response) => {
      this.ispList = response.ispList;
      this.showLoading = false;
    })
  }
  public filterChanged() {
    this.fetchISPList();
  }
  public openDetails(index) {
    this.showDetails.emit(this.ispList[index]);
  }
}

interface IFilterHash {
  searchText: string;
  orderBy: 'ASC' | 'DES';
  sortBy: 'name' | 'price' | 'rating';
}
