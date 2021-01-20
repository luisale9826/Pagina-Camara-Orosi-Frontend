import { WebConfigService } from '../services/web-config.service';

export class ImagesControl {
  constructor(private wcs: WebConfigService) {}

  getImage(path: string): string {
    const image = localStorage.getItem(path);
    return image === '' ? '/assets/images/sin-imagen.jpg' : image;
  }

  loadHeaderImages(): void {
    const images = ['principalHeader', 'principalCompany', 'principalFooter'];
    images.forEach((image) => {
      if (this.wcs.getLocalStorageItem(image) === null) {
        this.wcs
          .getImage(image)
          .then((data) => this.wcs.saveLocalStorageItem(image, data.url))
          .catch((err) => console.log(err));
      }
    });
  }

  loadDirectoryImage(): void {
    const images = ['directoryHeader'];
    images.forEach((image) => {
      if (this.wcs.getLocalStorageItem(image) === null) {
        this.wcs
          .getImage(image)
          .then((data) => this.wcs.saveLocalStorageItem(image, data.url))
          .catch((err) => console.log(err));
      }
    });
  }

  loadLoginImage(): void {
    const images = ['loginImage'];
    images.forEach((image) => {
      if (this.wcs.getLocalStorageItem(image) === null) {
        this.wcs
          .getImage(image)
          .then((data) => this.wcs.saveLocalStorageItem(image, data.url))
          .catch((err) => console.log(err));
      }
    });
  }
}
