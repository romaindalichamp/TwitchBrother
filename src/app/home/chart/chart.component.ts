import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {RxStompService} from '@stomp/ng2-stompjs';
import {Message} from "@stomp/stompjs";
import {StreamResponseDataModel} from "../../shared/model/stream-response-data.model";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public receivedMessages: StreamResponseDataModel;
  private streamsSubscription: Subscription;

  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit() {
    this.streamsSubscription = this.rxStompService.watch('/streams/progress').subscribe((message: Message) => {
      // this.receivedMessages.push(message.body);
      this.receivedMessages = <StreamResponseDataModel>JSON.parse(message.body);
    });
  }

  ngOnDestroy() {
    this.streamsSubscription.unsubscribe();
  }

  onSendMessage() {
    const message = `Message generated at ${new Date}`;
    this.rxStompService.publish({destination: '/streams/progress', body: message});
  }
}
