import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazionePreviewComponent } from './transazione-preview.component';

describe('TransazionePreviewComponent', () => {
  let component: TransazionePreviewComponent;
  let fixture: ComponentFixture<TransazionePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransazionePreviewComponent]
    });
    fixture = TestBed.createComponent(TransazionePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
