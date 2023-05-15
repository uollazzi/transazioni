import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransazioniComponent } from './transazioni/transazioni.component';
import { TransazioniListComponent } from './transazioni-list/transazioni-list.component';
import { TransazionePreviewComponent } from './transazione-preview/transazione-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    TransazioniComponent,
    TransazioniListComponent,
    TransazionePreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
