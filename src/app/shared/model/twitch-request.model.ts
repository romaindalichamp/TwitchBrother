import {TwitchRequestDataModel} from "./twitch-request-data.model";

export interface TwitchRequestModel {
  type: string;
  nonce: string;
  data: TwitchRequestDataModel;
}

export class TwitchRequestModel implements TwitchRequestModel {
  data = new TwitchRequestDataModel();
}
