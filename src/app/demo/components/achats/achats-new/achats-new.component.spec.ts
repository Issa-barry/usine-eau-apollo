import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatsNewComponent } from './achats-new.component';

describe('AchatsNewComponent', () => {
  let component: AchatsNewComponent;
  let fixture: ComponentFixture<AchatsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchatsNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchatsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
