import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {WsclientService} from '../client/wsclient.service';
import {Twitch} from '../model/twtich.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  TWITCH_URL = 'wss://pubsub-edge.twitch.tv';
  public twitchData: Subject<Twitch>;

  constructor(private wsclientService: WsclientService) {
    this.twitchData = <Subject<Twitch>>wsclientService.connect(this.TWITCH_URL).pipe(map(
      (response: MessageEvent): Twitch => {
        let data = JSON.parse(response.data);
        console.log(data);
        return {
          type: data.type
        };
      }
    ));
  }
}
