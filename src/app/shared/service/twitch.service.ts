import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {TwitchRequestModel} from "../model/twitch-request.model";
import {WsclientService} from "../client/wsclient.service";

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  public progress: any = {};

  public twitchData: Subject<TwitchRequestModel> | undefined;
  private twitchResponse: any;

  constructor(private wsclientService: WsclientService) {
    // this.wsclientService.connect();
  }
}
