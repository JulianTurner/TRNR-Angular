import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { LanguageStorage } from './services/language-storage/language-storage';

@Component({
  selector: 'language-picker',
  templateUrl: 'language-picker.html',
  styleUrls: ['language-picker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LanguagePicker implements OnInit, OnDestroy {
  private subscription: Subscription = Subscription.EMPTY;
  langs: any = [];

  constructor(
    private _languageStorage: LanguageStorage,
    public translocoService: TranslocoService
  ) {
    this.langs = translocoService.getAvailableLangs();
    const langName = this._languageStorage.getStoredLanguage();
    if (langName) {
      this.change(langName)
    } else {
      //this.translate.use('en');
    }
  }

  change(lang: string) {
    // Ensure new active lang is loaded
    this.subscription.unsubscribe();
    this.subscription = this.translocoService
      .load(lang)
      .pipe(take(1))
      .subscribe(() => {
        this.translocoService.setActiveLang(lang);
      });
  }

  get activeLang() {
    return this.translocoService.getActiveLang();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectLanguage(language: string) {
    this._languageStorage.storeLanguage(language);
    this.change(language)
  }
}
