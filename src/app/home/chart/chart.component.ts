import {Component, OnInit} from '@angular/core';
import {TwitchService} from "../../shared/service/twitch.service";
import {Observable} from "rxjs";
import {RxStompService} from '@stomp/ng2-stompjs';
import {map} from 'rxjs/operators';
import {RxStompState} from '@stomp/rx-stomp';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public connectionStatus$: Observable<string>;

  constructor(private twitchService: TwitchService, public rxStompService: RxStompService) {
    twitchService.progress;
    this.connectionStatus$ = rxStompService.connectionState$.pipe(map((state) => {
      console.log(state);
      // convert numeric RxStompState to string
      return RxStompState[state];
    }));
  }

  ngOnInit(): void {
    this.sendMsg();
  }

  sendMsg() {
    // this.twitchRequestModel.type = "PING";
    // // this.twitchService.twitchData.next(this.twitchRequestModel);
  }


  // listenTopic() {
  //   this.twitchRequestModel.type = "LISTEN";
  //   this.twitchRequestModel.data.topics.push("channel-bits-events-v1.44322889");
  //   this.twitchRequestModel.data.auth_token = "cfabdegwdoklmawdzdo98xt2fo512y";
  //   this.twitchRequestModel.nonce = "654684641263451652431653";
  //   // this.twitchService.twitchData.next(this.twitchRequestModel);
  // }

}
