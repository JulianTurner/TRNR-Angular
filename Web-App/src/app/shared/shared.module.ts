import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppFooter } from './footer/footer';
import { NavBar } from './navbar/navbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { StyleManager } from './style-manager';
import { ThemeStorage } from './theme-picker/theme-storage/theme-storage';
import { LanguageStorage } from './language-picker/services/language-storage/language-storage';

import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemePicker } from './theme-picker';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CookiePopup } from './cookie-popup/cookie-popup';
import { Sidenav } from './sidenav/sidenav';
import { LanguagePicker } from './language-picker/language-picker';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    NavBar,
    AppFooter,
    ThemePicker,
    CookiePopup,
    Sidenav,
    LanguagePicker,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    TranslocoModule,
  ],
  exports: [NavBar, AppFooter, CookiePopup, Sidenav],
  providers: [
    MatNativeDateModule,
    StyleManager,
    ThemeStorage,
    LanguageStorage,
  ],
})
export class AppSharedModule {
  /**
   *
   */
  constructor() {}
}
