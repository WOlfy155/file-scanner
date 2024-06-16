import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (!localStorage.getItem('url-search-metrics')) {
  localStorage.setItem('url-search-metrics', JSON.stringify({
    'https://google.com': [47, 58, 10, 11, 10, 21],
    'https://youtube.com': [63, 21, 58, 15, 40, 63],
    'https://www.reddit.com': [57, 65, 62, 17, 23, 36],
    'https://www.twitch.tv': [49, 53, 43, 45, 53, 19]
  }));
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
