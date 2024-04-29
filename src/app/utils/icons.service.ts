import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconsService {
  private iconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  init() {
    this.iconRegistry.addSvgIconResolver((name: string, namespace: string) =>
      this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/icons/${name}.svg`)
    );
  }
}
