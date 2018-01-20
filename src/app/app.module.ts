import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule,
    MatToolbarModule, MatCardModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
