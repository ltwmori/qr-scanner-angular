import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { SafePipe } from './safe.pipe';
import { HttpClientModule } from '@angular/common/http';
// import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    NgxScannerQrcodeModule,
    HttpClientModule,
  ],
  declarations: [ AppComponent, SafePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
