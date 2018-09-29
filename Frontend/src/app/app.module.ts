import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCaseComponent } from './test-case/test-case.component';
import {MatCardModule, MatFormFieldModule, MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TestCaseComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
