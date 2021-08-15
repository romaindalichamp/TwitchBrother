import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StreamResponseModel} from "../../shared/model/stream-response.model";
import {GameListModel} from "../../shared/model/game-list.model";
import {GameModel} from "../../shared/model/game.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Input() receivedStreams$: BehaviorSubject<StreamResponseModel> = new BehaviorSubject<StreamResponseModel>(new StreamResponseModel());
  @Input() groupedStreams: GameListModel[] = [];
  @Input() gamesGeneralInfos: GameModel[] = []
  @Output() saveCurrentDatasEmitter: EventEmitter<GameModel[]> = new EventEmitter<GameModel[]>();

  saveCurrentDatas(){
    this.saveCurrentDatasEmitter.emit();
  }
}
