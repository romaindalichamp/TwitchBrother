import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {StreamResponseModel} from "../../shared/model/stream-response.model";

import {GameModel} from "../../shared/model/game.model";
import {StreamResponseDataListModel} from "../../shared/model/stream-response-data-list.model";

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() receivedStreams$: BehaviorSubject<StreamResponseModel> = new BehaviorSubject<StreamResponseModel>(new StreamResponseModel());
  @Input() groupedStreams: StreamResponseDataListModel[] = [];
  @Input() gamesGeneralInfos: GameModel[] = [];

  chartData: { name: string, value: number }[] = [];

  constructor() {
    // this.initializeChartOptions();
  }

  ngOnInit() {
    this.receivedStreams$.subscribe(() => {
      this.mapGameInfosToChart();
    })
  }

  private mapGameInfosToChart() {
    this.chartData = [];
    this.gamesGeneralInfos.forEach((game: GameModel) => {
      this.chartData.push({
        name: game.game_name,
        value: game.viewers
      });
    });

    // I am removing Raibox Six datas cause there is way to much viewers and the Chart become unrelevant
    this.chartData = this.chartData.filter((chartData) => chartData.name != 'Tom Clancy\'s Rainbow Six Siege');
  }

  ngOnDestroy() {
    this.receivedStreams$.unsubscribe();
  }
}
