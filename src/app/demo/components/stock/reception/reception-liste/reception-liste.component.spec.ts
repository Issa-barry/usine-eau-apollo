import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionListeComponent } from './reception-liste.component';

describe('ReceptionListeComponent', () => {
  let component: ReceptionListeComponent;
  let fixture: ComponentFixture<ReceptionListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptionListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceptionListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
