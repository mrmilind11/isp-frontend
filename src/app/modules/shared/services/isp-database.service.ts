import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { IspModel } from './../../../models/isp.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IspDatabaseService {
  /************************************* Constructor **********************************/
  constructor(
    private http: HttpClient
  ) { }
  /************************************* Properties ***********************************/
  /************************************* Methods **************************************/
  public fetchISPList(queryData?: IQueryData): Observable<IFetchIspResponse> {
    const paramsToSend: any = queryData || {};
    return this.http.get<IFetchIspResponse>('/api/isp', { params: paramsToSend });
  }
  public fetchTotalApiHitCount(): Observable<ITotalApiHitResponse> {
    return this.http.get<ITotalApiHitResponse>('/api/querycount/total');
  }
  public fetchTotalISPCount(): Observable<ITotalISPCountResponse> {
    return this.http.get<ITotalISPCountResponse>('/api/isp/count');
  }
  public downloadISPDetail(id: string) {
    window.open(`${environment.apiPoint}/api/isp/download/${id}`, '_blank');
  }
}


/******************************************** Interfaces ******************************/
interface IQueryData {
  searchText?: string;
  orderBy?: 'ASC' | 'DES';
  sortBy?: 'price' | 'rating' | 'name';
}
interface IFetchIspResponse {
  ispList: IspModel[]
}
interface ITotalApiHitResponse {
  totalCount: number;
}
interface ITotalISPCountResponse {
  totalISPCount: number;
}