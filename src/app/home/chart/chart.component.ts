import {Component, OnInit} from '@angular/core';
import {TwitchService} from "../../shared/service/twitch.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private twitchService: TwitchService) {
    twitchService.twitchData.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
  }

  ngOnInit(): void {
    this.sendMsg();
  }

  private pingMessage = {
    type: "PING"
  };

  sendMsg() {
    this.twitchService.twitchData.next(this.pingMessage);
  }

}
