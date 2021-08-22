import {GameModel} from "./game.model";

export interface GameListModel {
  gamesGeneralInformations: GameModel[];
}

export class GameListModel implements GameListModel {
}
