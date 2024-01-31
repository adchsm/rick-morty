import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Character } from '../../models/rick-morty.models';
import { getCharacters } from '../../store/actions/rick-morty.actions';
import {
  selectCharactersData,
  selectCharactersError,
  selectCharactersLoading,
} from '../../store/selectors/rick-morty.selectors';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterPageComponent implements OnInit {
  protected characters = toSignal(this.store.select(selectCharactersData));
  protected isLoading = toSignal(this.store.select(selectCharactersLoading));
  protected error = toSignal(this.store.select(selectCharactersError));
  protected favouriteCharacter = signal<Character | null>(null);

  protected form: FormGroup = this.formBuilder.group({
    character: [],
  });

  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.watchCharacterInput();
  }

  public ngOnInit(): void {
    this.store.dispatch(getCharacters({}));
  }

  private watchCharacterInput(): void {
    this.form
      .get('character')
      ?.valueChanges.pipe(
        takeUntilDestroyed(),
        distinctUntilChanged(),
        debounceTime(500)
      )
      .subscribe((value: Character | string) => {
        if (typeof value === 'string') {
          this.store.dispatch(getCharacters({ searchTerm: value }));
        } else {
          this.favouriteCharacter.set(value);
        }
      });
  }

  protected displayFn(character: Character): string {
    return character?.name || '';
  }
}
