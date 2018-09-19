import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/index';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  //TODO: any?
  get(url: string, params?: HttpParams): Observable<any> {
    const options = this.joinParams(params);
    return this.http.get(url, options);
  }

  //TODO: any?
  post(url: string, body?: any, params?: HttpParams): Observable<any> {
    const options = this.joinParams(params);
    return this.http.post(url, body, options);
  }

  private joinParams(params?: HttpParams): { headers: HttpHeaders, params?: HttpParams } {
    if (!params) {
      return httpOptions;
    }
    return {
      ...httpOptions,
      params
    };
  }

}
