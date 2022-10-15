import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomRollNoComponent } from './random-roll-no/random-roll-no.component';
import { RandomChuckNorrisJokeComponent } from './random-chuck-norris-joke/random-chuck-norris-joke.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RandomRollNoComponent,
    RandomChuckNorrisJokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
