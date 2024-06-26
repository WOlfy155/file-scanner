import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/token-interceptor';
import {FakeBackendInterceptor} from './interceptors/fake-backend-interceptor.service';
import { TreeComponent } from './shared/components/tree/tree.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TreeComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: FakeBackendInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
