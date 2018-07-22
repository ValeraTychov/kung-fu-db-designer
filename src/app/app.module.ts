import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

import { LiquidContainersModule } from './liquid-containers/liquid-containers.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    LiquidContainersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
