import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EasyZoomComponent } from './easy-zoom.component';

@NgModule({
  declarations: [EasyZoomComponent],
  imports: [
    BrowserModule
  ],
  exports: [EasyZoomComponent]
})
export class EasyZoomModule { }
