import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterAutocompleteFormComponent } from '../../containers/character-autocomplete-form/character-autocomplete-form.component';
import { Character } from '../../models/rick-morty.models';
import { getCharacters } from '../../store/actions/rick-morty.actions';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [CommonModule, CharacterAutocompleteFormComponent],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterPageComponent implements OnInit {
  protected selectedCharacter = signal<Character | null>(null);

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(getCharacters({}));
  }

  protected handleCharacterSelected(character: Character | null): void {
    this.selectedCharacter.set(character);
  }
}
