import {TwitchResponseDataModel} from "./twitch-response-data.model";

export interface TwitchResponseModel {
  type: string;
  data: TwitchResponseDataModel;
}

export class TwitchResponseModel implements TwitchResponseModel {
}
