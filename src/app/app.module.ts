import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BarChartComponent} from './home/bar-chart/bar-chart.component';
import {SharedModule} from "./shared/shared.module";
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import {StatusComponent} from './status/status.component';
import {CustomRxStompConfig} from "./custom-rx-stomp.config";
import {StatisticsComponent} from './home/statistics/statistics.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LineChartComponent } from './home/line-chart/line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarChartComponent,
    StatusComponent,
    StatisticsComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxChartsModule,
    BrowserAnimationsModule
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
