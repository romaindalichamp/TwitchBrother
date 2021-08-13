import {TwitchResponseMessageModel} from "./twitch-response-message.model";

export interface TwitchResponseDataModel {
  topic: string;
  message: TwitchResponseMessageModel;
}
export class TwitchResponseDataModel implements TwitchResponseDataModel{}
