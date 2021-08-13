import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {WsclientService} from '../client/wsclient.service';
import {TwitchResponseModel} from '../model/twitch-response.model';
import {Subject} from 'rxjs';
import {TwitchRequestModel} from "../model/twitch-request.model";

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  TWITCH_URL = 'wss://pubsub-edge.twitch.tv';
  public twitchData: Subject<TwitchRequestModel>;
  private twitchResponse: any;

  constructor(private wsclientService: WsclientService) {
    this.twitchData = <Subject<TwitchRequestModel>>wsclientService.connect(this.TWITCH_URL).pipe(map(
      (response: MessageEvent): TwitchRequestModel => {
        return JSON.parse(response.data);
      }
    ));
  }
}
