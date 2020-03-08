import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[] = []
  constructor() { }

  getAllLogs(){
    return this.logs = [
      {id: 1, text: "Generated Components", date: new Date('02/25/2020 09:58:34')},
      {id: 2, text: "Added Bootstrap", date: new Date('02/27/2020 10:10:20')},
      {id: 3, text: "Added logs Components", date: new Date('02/27/2020 14:30:15')}
    ];
  }
}
