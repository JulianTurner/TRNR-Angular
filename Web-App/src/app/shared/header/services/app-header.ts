import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

/**
 * Service responsible for setting the title that appears.
 */
@Injectable()
export class ComponentPageTitle {
  current: string = '';

  setTitle(title: string) {
    this.current = title;
    this.bodyTitle.setTitle(this.translate.instant(title));
  }

  constructor(private bodyTitle: Title, private translate: TranslateService) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (this.current.length > 1) {
        this.bodyTitle.setTitle(this.translate.instant(this.current));
      }
    });
  }
}
