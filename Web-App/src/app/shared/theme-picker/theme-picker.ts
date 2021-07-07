import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {StyleManager} from '../style-manager';
import { SiteTheme, ThemeStorage} from './theme-storage/theme-storage';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'theme-picker',
  templateUrl: 'theme-picker.html',
  styleUrls: ['theme-picker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ThemePicker implements OnInit, OnDestroy {
  currentTheme: SiteTheme | undefined;

  // The below colors need to align with the themes defined in theme-picker.scss
  themes: SiteTheme[] = [
    {
      displayName: 'Pink',
      name: 'pink',
      isDark: false,
    },
    {
      displayName: 'Blau',
      name: 'blue',
      isDark: false,
      isDefault: true,
    },
    {
      displayName: 'Grau (Dark)',
      name: 'grey',
      isDark: true,
    },
    {
      displayName: 'Braun (Dark)',
      name: 'brown',
      isDark: true,
    },
  ];

  constructor(public styleManager: StyleManager,
              private _themeStorage: ThemeStorage,
              private _activatedRoute: ActivatedRoute,
) {

    const themeName = this._themeStorage.getStoredThemeName();
    if (themeName) {
      this.selectTheme(themeName);
    }
  }

  ngOnInit() {
   
  }

  ngOnDestroy() {
  }

  selectTheme(themeName: string) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `${theme.name}.css`);
    }

    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }
}


