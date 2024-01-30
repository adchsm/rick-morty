import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { getCharacters } from './store/actions/rick-morty.actions';
import {
  selectCharactersData,
  selectCharactersError,
  selectCharactersLoading,
} from './store/selectors/rick-morty.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  protected characters = toSignal(this.store.select(selectCharactersData));
  protected isLoading = toSignal(this.store.select(selectCharactersLoading));
  protected error = toSignal(this.store.select(selectCharactersError));

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(getCharacters());
  }
}
