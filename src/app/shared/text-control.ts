import { Injectable } from '@angular/core';
import { WebConfigService } from '../services/web-config.service';

@Injectable({
  providedIn: 'root',
})
export class TextControl {
  constructor(private wcs: WebConfigService) {}

  getText(text: string): string {
    if (this.wcs.getLocalStorageItem(text) === null) {
      this.wcs
        .getText(text)
        .then((data) => {
          const res = data.text;
          this.wcs.saveLocalStorageItem(text, res);
          return res;
        })
        .catch((err) => console.log(err));
    } else {
      return this.wcs.getLocalStorageItem(text);
    }
  }
}
