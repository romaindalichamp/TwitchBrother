import {TwitchResponseModel} from "../model/twitch-response.model";

export const TwitchUtil ={
  websocketReponseToTwitchResponseModel(twitchResponse: string): TwitchResponseModel {
    return <TwitchResponseModel><any>twitchResponse;
  }
}
