import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KendoGridService {

  private chunkSize = 1000; // Adjust chunk size as needed
  private worker!: Worker;
  private data$: Observable<any[]>;
  constructor(private http: HttpClient) {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./parse-csv.worker', import.meta.url), { type: 'module' });
    } else {
      console.error('Web Workers are not supported in this environment.');
    }

    this.data$ = new Observable<any[]>(observer => {
      if (this.worker) {
        this.worker.onmessage = ({ data }) => {
          if (data.type === 'chunk') {
            observer.next(data.data);
          } else if (data.type === 'complete') {
            observer.complete();
          }
        };
        this.http.get('Electric_Vehicle_Population_Data.csv', { responseType: 'text' })
          .subscribe(fileData => {
            this.worker.postMessage(fileData);
          }, error => {
            observer.error(error);
          });
      }
    }).pipe(shareReplay(1));
  }

  public getCSVData(): Observable<any[]> {
    return this.data$;
  }
}
