import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class LanguageStorage {
  static storageKey = 'language-storage-current-name';

  onLanguageUpdate: EventEmitter<string> = new EventEmitter<string>();

  storeLanguage(language: string) {
    try {
      window.localStorage[LanguageStorage.storageKey] = language;
    } catch {}

    this.onLanguageUpdate.emit(language);
  }

  getStoredLanguage(): string | null {
    try {
      return window.localStorage[LanguageStorage.storageKey] || null;
    } catch {
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(LanguageStorage.storageKey);
    } catch {}
  }
}
