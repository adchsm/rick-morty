import { Routes } from '@angular/router';
import { CharacterPageComponent } from './pages/character-page/character-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CharacterPageComponent,
    title: 'The Rick & Morty Character Database',
  },
];
