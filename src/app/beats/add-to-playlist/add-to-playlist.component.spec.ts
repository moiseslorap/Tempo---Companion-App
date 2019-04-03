import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToPlaylistPage } from './add-to-playlist.page';

describe('AddToPlaylistPage', () => {
  let component: AddToPlaylistPage;
  let fixture: ComponentFixture<AddToPlaylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToPlaylistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToPlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
