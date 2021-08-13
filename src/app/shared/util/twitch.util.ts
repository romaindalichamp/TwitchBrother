import {StreamResponseModel} from "../model/stream-response.model";

export const TwitchUtil = {
  websocketReponseToTwitchResponseModel(twitchResponse: string): StreamResponseModel {
    return <StreamResponseModel><any>twitchResponse;
  }
}
