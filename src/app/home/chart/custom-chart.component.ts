import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {RxStompService} from '@stomp/ng2-stompjs';
import {Message} from "@stomp/stompjs";
import {StreamResponseModel} from "../../shared/model/stream-response.model";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";
import {StreamResponseDataModel} from "../../shared/model/stream-response-data.model";
import {GameModel} from "../../shared/model/game.model";
import {ChartSerieModel} from "../../shared/model/chart-serie.model";
import {TwitchUtil} from "../../shared/util/twitch.util";
import {GameListModel} from "../../shared/model/game-list.model";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.scss']
})
export class CustomChartComponent implements OnInit {
  @Input() receivedStreams$: BehaviorSubject<StreamResponseModel> = new BehaviorSubject<StreamResponseModel>(new StreamResponseModel());
  @Input() groupedStreams: GameListModel[] = [];
  @Input() gamesGeneralInfos: GameModel[] = [];

  @ViewChild("chart") chart: ChartComponent;
  chartOptions: Partial<ChartOptions>;
  chartSeries: ChartSerieModel[] = [];

  constructor() {
    this.initializeChartOptions();
  }

  ngOnInit() {
    this.receivedStreams$.subscribe((streamResponseModel: StreamResponseModel)=>{
        this.setChartSeries();
    })
  }

  /**
   * Initialize and or update chart series
   * is triggered by receivedStreams$
   * @private
   */
  private setChartSeries() {
    this.gamesGeneralInfos.forEach((game: GameModel) => {
      const gameFound = this.chartSeries.findIndex(chartGame=>chartGame.name === game.game_name);

      if(gameFound === -1){
        this.chartSeries.push({
          name: game.game_name,
          data: [game.viewers]
        });
      }else{
        this.chartSeries[gameFound].data = this.chartSeries[gameFound].data.concat(game.viewers);
      }
    });
  }

  ngOnDestroy() {
    this.receivedStreams$.unsubscribe();
  }

  /**
   * Default Chart configuration
   */
  initializeChartOptions() {
    this.chartOptions = {
      series: [],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Games",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Rainbow",
          "FarCray",
          "Assassins",
        ]
      }
    };
  }
}
