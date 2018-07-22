import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

import { LiquidContainersModule } from './liquid-containers/liquid-containers.module';
import { SchemeEditorComponent } from './scheme-editor/scheme-editor.component';
import { TableComponent } from './tables/table/table.component';
import { FieldListComponent } from './tables/field-list/field-list.component';
import { FieldComponent } from './tables/field/field.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SchemeEditorComponent,
    TableComponent,
    FieldListComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    LiquidContainersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
