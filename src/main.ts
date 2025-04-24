import { bootstrapApplication } from '@angular/platform-browser';
import { MemeListComponent } from './app/meme-list/meme-list.component';
import { appConfig } from './app/app.config';

bootstrapApplication(MemeListComponent, appConfig)
  .catch(err => console.error(err));
