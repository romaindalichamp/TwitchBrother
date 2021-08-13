import {Component, OnInit} from '@angular/core';
import {TwitchService} from "../../shared/service/twitch.service";
import {TwitchResponseModel} from "../../shared/model/twitch-response.model";
import {TwitchRequestModel} from "../../shared/model/twitch-request.model";
import {TwitchUtil} from "../../shared/util/twitch.util";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  private twitchRequestModel: TwitchRequestModel = new TwitchRequestModel();
  private twitchResponse: TwitchResponseModel = new TwitchResponseModel();

  constructor(private twitchService: TwitchService) {
    twitchService.twitchData.subscribe(msg => {
      console.log(TwitchUtil.websocketReponseToTwitchResponseModel(JSON.stringify(msg)));
    });
  }

  ngOnInit(): void {
    this.sendMsg();
  }

  sendMsg() {
    this.twitchRequestModel.type = "PING";
    this.twitchService.twitchData.next(this.twitchRequestModel);
  }


  listenTopic() {
    this.twitchRequestModel.type = "LISTEN";
    this.twitchRequestModel.data.topics.push("channel-bits-events-v1.44322889");
    this.twitchRequestModel.data.auth_token = "cfabdegwdoklmawdzdo98xt2fo512y";
    this.twitchRequestModel.nonce = "654684641263451652431653";
    this.twitchService.twitchData.next(this.twitchRequestModel);
  }

}
