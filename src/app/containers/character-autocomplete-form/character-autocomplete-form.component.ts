import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { debounce, distinctUntilChanged, of, timer } from 'rxjs';
import { Character } from '../../models/rick-morty.models';
import { getCharacters } from '../../store/actions/rick-morty.actions';
import {
  selectCharactersData,
  selectCharactersError,
  selectCharactersLoading,
} from '../../store/selectors/rick-morty.selectors';

@Component({
  selector: 'app-character-autocomplete-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './character-autocomplete-form.component.html',
  styleUrl: './character-autocomplete-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAutocompleteFormComponent {
  @Output() characterSelected: EventEmitter<Character> = new EventEmitter();

  protected characters = toSignal(this.store.select(selectCharactersData));
  protected isLoading = toSignal(this.store.select(selectCharactersLoading));
  protected error = toSignal(this.store.select(selectCharactersError));

  protected form: FormGroup = this.formBuilder.group({
    character: [],
  });

  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.form
      .get('character')
      ?.valueChanges.pipe(
        takeUntilDestroyed(),
        distinctUntilChanged(),
        debounce((x) => (typeof x === 'string' ? timer(500) : of({})))
      )
      .subscribe((value: Character | string) => {
        if (typeof value === 'string') {
          this.store.dispatch(getCharacters({ searchTerm: value }));
          this.characterSelected.emit(undefined);
        } else {
          this.characterSelected.emit(value);
        }
      });
  }

  protected displayFn(character: Character): string {
    return character?.name || '';
  }
}
