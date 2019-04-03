import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBeatPage } from './crud-beat.page';

describe('CrudBeatPage', () => {
  let component: CrudBeatPage;
  let fixture: ComponentFixture<CrudBeatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudBeatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
