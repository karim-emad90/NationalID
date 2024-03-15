import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalIdComponent } from './national-id.component';

describe('NationalIdComponent', () => {
  let component: NationalIdComponent;
  let fixture: ComponentFixture<NationalIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
