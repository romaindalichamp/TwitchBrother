import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {StreamResponseModel} from "../../shared/model/stream-response.model";
import {GameModel} from "../../shared/model/game.model";
import {StreamResponseDataListModel} from "../../shared/model/stream-response-data-list.model";

/**
 * In this component, data should be actualized, but it seems it is not working like to other bar chart
 * datas cannot be actualized in real time
 * this is the second library i am trying and could not make it works for the same reason
 */
@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() receivedStreams$: BehaviorSubject<StreamResponseModel> = new BehaviorSubject<StreamResponseModel>(new StreamResponseModel());
  @Input() groupedStreams: StreamResponseDataListModel[] = [];
  @Input() gamesGeneralInfos: GameModel[] = [];
  private _counter: number = 0;

  chartData: {
    name: string,
    series: {
      name: number,
      value: number
    }[]
  }[] = []

  constructor() {
    this.chartData = this.staticData;
  }

  ngOnInit() {
    this.receivedStreams$.subscribe(() => {
      // this.mapGameInfosToChart();
    })
  }

  /**
   * Push new streaming values into the chart data's
   * The mapping works, the vizualization doesn't
   * @private
   */
  private mapGameInfosToChart() {
    if (this.chartData.length === 0) {
      this.gamesGeneralInfos.forEach((game: GameModel) => {
        this.chartData.push({
          name: game.game_name,
          series: [{name: this._counter, value: game.viewers}]
        });
      });
      this._counter++;
    } else {
      this.gamesGeneralInfos.forEach((game: GameModel) => {
        this.chartData.find((data) => data.name == game.game_name)?.series.push({
          name: this._counter,
          value: game.viewers
        })
      });
      this._counter++;
      console.log(this.chartData);
    }
    ;
  }

  ngOnDestroy() {
    this.receivedStreams$.unsubscribe();
  }

  /**
   * When static datas are assigned, it works !
   */
  staticData = [
    {
      "name": "Far Cry 5",
      "series": [
        {
          "name": 2,
          "value": 103
        },
        {
          "name": 3,
          "value": 103
        },
        {
          "name": 4,
          "value": 103
        },
        {
          "name": 5,
          "value": 103
        },
        {
          "name": 6,
          "value": 103
        },
        {
          "name": 7,
          "value": 103
        },
        {
          "name": 8,
          "value": 103
        },
        {
          "name": 9,
          "value": 103
        },
        {
          "name": 10,
          "value": 105
        }
      ]
    },
    {
      "name": "Assassin's Creed: Odyssey",
      "series": [
        {
          "name": 2,
          "value": 38
        },
        {
          "name": 3,
          "value": 38
        },
        {
          "name": 4,
          "value": 38
        },
        {
          "name": 5,
          "value": 38
        },
        {
          "name": 6,
          "value": 38
        },
        {
          "name": 7,
          "value": 38
        },
        {
          "name": 8,
          "value": 38
        },
        {
          "name": 9,
          "value": 38
        },
        {
          "name": 10,
          "value": 38
        }
      ]
    }
  ]
}
