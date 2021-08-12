import {Component, OnInit} from '@angular/core';
import {TwitchService} from "../../shared/service/twitch.service";
import {TwitchPubsubMessageModel} from "../../shared/model/twitch-pubsub-message.model";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  private twitchPubsubMessageModel: TwitchPubsubMessageModel = new TwitchPubsubMessageModel();

  constructor(private twitchService: TwitchService) {

    twitchService.twitchData.subscribe(msg => {
      console.log("Response from websocket: " + JSON.stringify(msg));
    });
  }

  ngOnInit(): void {
    this.sendMsg();
  }

  sendMsg() {
    this.twitchPubsubMessageModel.type = "PING";
    this.twitchService.twitchData.next(this.twitchPubsubMessageModel);
  }

}
