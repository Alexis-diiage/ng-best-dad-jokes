import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MyPipe } from './pipe/pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatProgressSpinnerModule,
    MyPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
