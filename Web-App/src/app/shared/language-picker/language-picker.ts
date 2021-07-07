import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LanguageStorage,
  
} from './language-storage/language-storage';

@Component({
  selector: 'language-picker',
  templateUrl: 'language-picker.html',
  styleUrls: ['language-picker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LanguagePicker implements OnInit, OnDestroy {
  languages: string[] = [ 'en' , 'de' ];

  constructor(
    private translate: TranslateService,
    private _languageStorage: LanguageStorage
  ) {
    const langName = this._languageStorage.getStoredLanguage();
    if (langName) {
     this.translate.use(langName);
    } else {
      //this.translate.use('en');
    }
  }

  ngOnInit() {}

  ngOnDestroy() {}

  selectLanguage(language: string) {
    this.translate.use(language);
    this._languageStorage.storeLanguage(language);
  }
}
