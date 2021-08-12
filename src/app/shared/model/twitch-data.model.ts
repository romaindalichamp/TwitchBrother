import {TwitchMessageModel} from "./twitch-message.model";

export interface TwitchDataModel {
  topic: string;
  message: TwitchMessageModel;
}
export class TwitchDataModel implements TwitchDataModel{}
