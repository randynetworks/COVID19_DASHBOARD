import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOforComponent } from './for-ofor.component';

describe('ForOforComponent', () => {
  let component: ForOforComponent;
  let fixture: ComponentFixture<ForOforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForOforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForOforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
