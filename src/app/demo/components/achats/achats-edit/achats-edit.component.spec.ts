import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatsEditComponent } from './achats-edit.component';

describe('AchatsEditComponent', () => {
  let component: AchatsEditComponent;
  let fixture: ComponentFixture<AchatsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchatsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchatsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
