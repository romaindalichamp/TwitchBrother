export interface TwitchRequestDataModel {
  topics: string[];
  auth_token: string;
}

export class TwitchRequestDataModel implements TwitchRequestDataModel {
  topics: string[] = [];
}
