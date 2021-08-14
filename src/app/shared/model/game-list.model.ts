import {GameModel} from "./game.model";
import {StreamResponseDataModel} from "./stream-response-data.model";

export interface GameListModel {
  key: StreamResponseDataModel[];
}

export class GameListModel implements GameListModel {
}
