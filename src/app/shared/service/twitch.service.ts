import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {WsclientService} from '../client/wsclient.service';
import {TwitchPubsubMessageModel} from '../model/twitch-pubsub-message.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  TWITCH_URL = 'wss://pubsub-edge.twitch.tv';
  public twitchData: Subject<TwitchPubsubMessageModel>;

  constructor(private wsclientService: WsclientService) {
    this.twitchData = <Subject<TwitchPubsubMessageModel>>wsclientService.connect(this.TWITCH_URL).pipe(map(
      (response: MessageEvent): TwitchPubsubMessageModel => {
        return <TwitchPubsubMessageModel>JSON.parse(response.data);;
      }
    ));
  }
}
