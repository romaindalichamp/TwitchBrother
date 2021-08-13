import {Injectable} from '@angular/core';
import {Message} from '@stomp/stompjs';
import {RxStompService} from '@stomp/ng2-stompjs';
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WsclientService {
  public receivedMessages: string[] = [];
  private streamsSubscription: Subscription;

  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit() {
    this.streamsSubscription = this.rxStompService.watch('/streams/progress').subscribe((message: Message) => {
      this.receivedMessages.push(message.body);
    });
  }

  ngOnDestroy() {
    this.streamsSubscription.unsubscribe();
  }
}
