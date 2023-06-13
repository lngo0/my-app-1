import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showwAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showwAddTask = !this.showwAddTask;
    this.subject.next(this.showwAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
