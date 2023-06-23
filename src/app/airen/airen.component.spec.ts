import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirenComponent } from './airen.component';

describe('AirenComponent', () => {
  let component: AirenComponent;
  let fixture: ComponentFixture<AirenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirenComponent]
    });
    fixture = TestBed.createComponent(AirenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
