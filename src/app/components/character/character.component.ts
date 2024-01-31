import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Character } from '../../models/rick-morty.models';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, MatListModule, MatDividerModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent {
  @Input() character: Character | null = null;

  protected getEpisodeNumbers(episodes: string[]): string {
    return episodes.map((e) => e.split('/').pop()).join(', ');
  }
}
