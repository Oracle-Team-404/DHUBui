import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DemoService {
    constructor(private http: Http) {}

    getChartData() {
        let query = 'http://localhost:3001/api/chart'
        return this.http.get(query).map( (r: Response) => {
            let chartData = JSON.parse(r['_body']) as any;
            return chartData;
        });
    }
}
