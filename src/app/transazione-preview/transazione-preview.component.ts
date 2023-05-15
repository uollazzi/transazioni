import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transazione } from '../models/transazione';

@Component({
  selector: 'app-transazione-preview',
  templateUrl: './transazione-preview.component.html',
  styleUrls: ['./transazione-preview.component.css']
})
export class TransazionePreviewComponent implements OnInit {

  @Input("transazione")
  t?: Transazione;

  @Output()
  onSelected = new EventEmitter<Transazione>();

  @Output()
  onDeleted = new EventEmitter<Transazione>();

  ngOnInit(): void {
    // setInterval(() => {
    //   this.onSelected.emit(this.t);
    // }, 5000);
  }

  seleziona(e: MouseEvent) {
    this.onSelected.emit(this.t);
  }

  elimina() {
    this.onDeleted.emit(this.t);
  }
}
