import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatsDetailComponent } from './achats-detail.component';

describe('AchatsDetailComponent', () => {
  let component: AchatsDetailComponent;
  let fixture: ComponentFixture<AchatsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchatsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchatsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
