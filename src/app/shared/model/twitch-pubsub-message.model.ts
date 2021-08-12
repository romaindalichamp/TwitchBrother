import {TwitchDataModel} from "./twitch-data.model";

export interface TwitchPubsubMessageModel {
  type: string;
  data: TwitchDataModel;
}
export class TwitchPubsubMessageModel implements TwitchPubsubMessageModel{}
