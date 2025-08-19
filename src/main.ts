import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

// tells Angular to start with AppComponent as the root component with configuration provided in app.config.ts
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
