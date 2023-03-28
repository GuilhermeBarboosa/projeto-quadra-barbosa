/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JogosTableComponent } from './jogos-table.component';

describe('JogosTableComponent', () => {
  let component: JogosTableComponent;
  let fixture: ComponentFixture<JogosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
