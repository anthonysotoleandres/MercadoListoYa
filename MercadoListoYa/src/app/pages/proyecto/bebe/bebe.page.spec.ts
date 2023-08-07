import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebePage } from './bebe.page';

describe('BebePage', () => {
  let component: BebePage;
  let fixture: ComponentFixture<BebePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BebePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
