import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import {Http, RequestOptions, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as _ from "lodash";

@Injectable()
export class DataService {

    private API_URL: string;
    public STORED_NOTES: any = [];
    public dashboard_loaded: EventEmitter<any> = new EventEmitter<any>();
    STORED_DASHBOARD: any = {};

    constructor(public http: Http) {
      this.API_URL = environment.apiUrl;
    }

    getVendors(): Promise<any> {
        return new Promise((resolve, reject) => {
          this.http.get(this.API_URL + "/v2/vendors/twe").toPromise().then(vendors => {
              const _vendors = vendors.json();
            //   console.log(_vendors);
              // this.user_loaded.emit(_user);
              // this.has_loaded = true;
              resolve(_vendors);
          }).catch(ex => {
              reject(ex.json());
          });
        });
    }

}
