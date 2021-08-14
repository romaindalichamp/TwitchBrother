import {StreamResponseModel} from "../model/stream-response.model";

export const TwitchUtil = {
  websocketReponseToTwitchResponseModel(twitchResponse: string): StreamResponseModel {
    return <StreamResponseModel><any>twitchResponse;
  },

  groupBy: (key: any) => (array: any) => array.reduce((objectsByKeyValue: { [x: string]: any; }, obj: { [x: string]: any; }) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {}),

  groupByProperty(list: any, keyGetter: any): any {
  const map = new Map();
  list.forEach((item: any) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

}
