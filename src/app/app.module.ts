import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CustomChartComponent} from './home/chart/custom-chart.component';
import {SharedModule} from "./shared/shared.module";
// import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
// import {StatusComponent} from './status/status.component';
// import {CustomRxStompConfig} from "./custom-rx-stomp.config";
import {NgApexchartsModule} from "ng-apexcharts";
import { StatisticsComponent } from './home/statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomChartComponent,
    // StatusComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgApexchartsModule,
  ],
  // providers: [
  //
  //   {
  //     provide: InjectableRxStompConfig,
  //     // useValue: CustomRxStompConfig
  //   },
  //   {
  //     provide: RxStompService,
  //     useFactory: rxStompServiceFactory,
  //     deps: [InjectableRxStompConfig]
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
