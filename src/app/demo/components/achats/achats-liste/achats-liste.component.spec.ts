import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatsListeComponent } from './achats-liste.component';

describe('AchatsListeComponent', () => {
  let component: AchatsListeComponent;
  let fixture: ComponentFixture<AchatsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchatsListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchatsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
