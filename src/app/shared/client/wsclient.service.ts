import {Injectable} from '@angular/core';
import {Message} from '@stomp/stompjs';
import {RxStompService} from '@stomp/ng2-stompjs';
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WsclientService {
  public receivedMessages: string[] = [];
  private topicSubscription: Subscription;

  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit() {
    console.log("TOPIC SUBSCRIPTION");
    this.topicSubscription = this.rxStompService.watch('/topic/progress').subscribe((message: Message) => {
      console.log(message.body)
      this.receivedMessages.push(message.body);
    });
  }

  ngOnDestroy() {
    console.log("TOPIC DESTROY");
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    const message = `Message generated at ${new Date}`;
    this.rxStompService.publish({destination: '/topic/demo', body: message});
  }

// connect(url: string): void {
//   var socket = new SockJS(url);
//   this.ws = Stomp.over(socket);
//
//   let that = this;
//   this.ws.connect({}, function () {
//     that.ws.subscribe("/errors", function (message: { body: string; }) {
//       alert("Error " + message.body);
//     });
//     that.ws.subscribe("/topic/reply", function (message: { body: string; }) {
//       console.log(message)
//       that.showGreeting(message.body);
//     });
//     that.disabled = true;
//   }, function (error: string) {
//     alert("STOMP error " + error);
//   });
// }

// sendName() {
//   let data = JSON.stringify({
//     'name': this.name
//   })
//   this.ws.send("/app/message", {}, data);
// }
//
// showGreeting(message: string) {
//   this.showConversation = true;
//   this.greetings.push(message)
// }
//
// setConnected(connected: boolean | undefined) {
//   this.disabled = connected;
//   this.showConversation = connected;
//   this.greetings = [];
// }
}
