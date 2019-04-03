import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPlaylistPage } from './crud-playlist.page';

describe('CrudPlaylistPage', () => {
  let component: CrudPlaylistPage;
  let fixture: ComponentFixture<CrudPlaylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPlaylistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
