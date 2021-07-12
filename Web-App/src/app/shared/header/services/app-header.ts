import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';
import { filter, pluck } from 'rxjs/operators';

/**
 * Service responsible for setting the title that appears.
 */
@Injectable()
export class ComponentPageTitle {
  currentKey: string = '';
  currentTitle: string = '';

  setTitle(title: string) {
    this.currentTitle = '';
    this.currentKey = title;
  }

  constructor(
    private bodyTitle: Title,
    public translocoService: TranslocoService
  ) {
    this.translocoService.events$
      .pipe(
        filter((e) => e.type === 'translationLoadSuccess'),
        pluck('payload')
      )
      .subscribe(({ langName, scope }) => {
        this.currentTitle = translocoService.translate(this.currentKey);
        this.bodyTitle.setTitle(
          this.currentTitle
        );
      });

    translocoService.langChanges$.subscribe((lang) => {
      this.currentTitle = this.translocoService.translate(this.currentKey);
bodyTitle.setTitle(this.currentTitle);
    }

    );
  }
}
