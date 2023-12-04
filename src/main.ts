import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from '../src/enviroments/enviroments';
import * as firebase from 'firebase/app';
import 'firebase/analytics'; // Se você estiver usando o Analytics
import { getAnalytics } from 'firebase/analytics';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

const app = firebase.initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
