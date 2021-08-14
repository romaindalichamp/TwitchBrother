export interface GameModel {
  game_id: string;
  game_name: string;
  viewers: number;
}

export class GameModel implements GameModel {
}
