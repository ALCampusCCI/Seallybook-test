import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { firebaseConfig } from '../environments/environment';

import { MemeListComponent } from './meme-list/meme-list.component';
import { MemeService } from './meme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Ajout des providers Firebase
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    // Ajout du service et du composant
    MemeService,
    MemeListComponent
  ]
};
