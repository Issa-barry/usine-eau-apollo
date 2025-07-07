import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionNewComponent } from './reception-new.component';

describe('ReceptionNewComponent', () => {
  let component: ReceptionNewComponent;
  let fixture: ComponentFixture<ReceptionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptionNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceptionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
