import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { CharacterAutocompleteFormComponent } from './character-autocomplete-form.component';

describe('CharacterAutocompleteFormComponent', () => {
  let component: CharacterAutocompleteFormComponent;
  let fixture: ComponentFixture<CharacterAutocompleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterAutocompleteFormComponent, BrowserAnimationsModule],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterAutocompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
