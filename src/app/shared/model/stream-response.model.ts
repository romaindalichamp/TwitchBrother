import {StreamResponseDataModel} from "./stream-response-data.model";

export interface StreamResponseModel {
  gameList: string[];
  totalViewers: number;
  data: StreamResponseDataModel[];
}

export class StreamReponseModel implements StreamReponseModel {
}
