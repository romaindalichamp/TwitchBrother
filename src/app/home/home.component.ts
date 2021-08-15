import {Component, OnInit} from '@angular/core';
import {Message} from "@stomp/stompjs";
import {StreamResponseModel} from "../shared/model/stream-response.model";
import {TwitchUtil} from "../shared/util/twitch.util";
import {StreamResponseDataModel} from "../shared/model/stream-response-data.model";
import {GameListModel} from "../shared/model/game-list.model";
import {BehaviorSubject, Subscription} from "rxjs";
import {RxStompService} from "@stomp/ng2-stompjs";
import {GameModel} from "../shared/model/game.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _streamsSubscription: Subscription | undefined;
  receivedStreams$: BehaviorSubject<StreamResponseModel> = new BehaviorSubject<StreamResponseModel>(new StreamResponseModel());
  groupedStreams: GameListModel[] = [];
  gamesGeneralInfos: GameModel[] = [];

  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit(): void {
    this._streamsSubscription = this.rxStompService.watch('/streams/progress').subscribe((message: Message) => {
      this.receivedStreams$.next(<StreamResponseModel>JSON.parse(message.body));
      this.groupedStreams = TwitchUtil.groupByProperty(this.receivedStreams$.getValue().data, (game: StreamResponseDataModel) => game.game_id);

      this.mapStreamsToGeneralInfos();
    });
  }

  ngOnDestroy() {
    this._streamsSubscription.unsubscribe();
  }

  /**
   * Map Streams Data to General Informations, this is more convenient tu use with charts
   * @private
   */
  private mapStreamsToGeneralInfos() {
    this.gamesGeneralInfos = [];
    this.groupedStreams.forEach((gameListModel: any) => {

      let game_id: string = '';
      let game_name: string = '';

      const totalViewersForThisGame = gameListModel.reduce((accumulator: number, game: StreamResponseDataModel) => {
        game_id = game.game_id;
        game_name = game.game_name;
        return accumulator + game.viewer_count;
      }, 0);

      this.gamesGeneralInfos.push({
        game_id: game_id,
        game_name: game_name,
        viewers: totalViewersForThisGame
      });
    });
  }
}
