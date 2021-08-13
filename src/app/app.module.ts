import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ChartComponent} from './home/chart/chart.component';
import {SharedModule} from "./shared/shared.module";
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import {StatusComponent} from './status/status.component';
import {MessagesComponent} from './messages/messages.component';
import {CustomRxStompConfig} from "./custom-rx-stomp.config";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    StatusComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [

    {
      provide: InjectableRxStompConfig,
      useValue: CustomRxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
