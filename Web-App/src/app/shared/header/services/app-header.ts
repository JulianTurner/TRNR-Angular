import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Subject } from 'rxjs';

/**
 * Service responsible for setting the title that appears.
 */
@Injectable()
export class ComponentPageTitle {

  private pageTitleSource = new Subject<string>();
  pageTitle$ = this.pageTitleSource.asObservable();

  settitle(title: string) {

    console.log(title)
    this.pageTitleSource.next(title);
    this.bodyTitle.setTitle(title);
  }

  constructor(private bodyTitle: Title) {}
}
