import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerDemoComponent } from './logger-demo/logger-demo.component';
import { ChildComponent } from './child/child.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsDemoComponent,
    LoggerDemoComponent,
    ChildComponent,
    PostsComponent
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
