import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioniComponent } from './transazioni.component';

describe('TransazioniComponent', () => {
  let component: TransazioniComponent;
  let fixture: ComponentFixture<TransazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransazioniComponent]
    });
    fixture = TestBed.createComponent(TransazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
