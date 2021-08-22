import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StreamResponseModel} from "../../shared/model/stream-response.model";
import {StreamResponseDataListModel} from "../../shared/model/stream-response-data-list.model";
import {GameModel} from "../../shared/model/game.model";
import {BehaviorSubject} from "rxjs";
import {GameListModel} from "../../shared/model/game-list.model";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Input() receivedStreams$: BehaviorSubject<StreamResponseModel> = new BehaviorSubject<StreamResponseModel>(new StreamResponseModel());
  @Input() groupedStreams: StreamResponseDataListModel[] = [];
  @Input() gamesGeneralInfos: GameModel[] = []
  @Input() savedData: GameListModel = new GameListModel();
  @Output() saveCurrentDatasEmitter: EventEmitter<GameModel[]> = new EventEmitter<GameModel[]>();
  isSavedDataDivHidden: boolean = true;

  async saveCurrentDatas() {
    this.saveCurrentDatasEmitter.emit();
    this.isSavedDataDivHidden = false;
    await this.delay(2000);
    this.isSavedDataDivHidden = true;
  }

  private async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
