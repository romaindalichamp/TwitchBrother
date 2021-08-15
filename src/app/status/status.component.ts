// import {Component} from '@angular/core';
// import {Observable} from "rxjs";
// import {RxStompService} from "@stomp/ng2-stompjs";
// import {RxStompState} from "@stomp/rx-stomp";
// import {map} from "rxjs/operators";
//
// @Component({
//   selector: 'app-status',
//   templateUrl: './status.component.html',
//   styleUrls: ['./status.component.scss']
// })
// export class StatusComponent {
//   public connectionStatus$: Observable<string>;
//
//   constructor(public rxStompService: RxStompService) {
//     this.connectionStatus$ = rxStompService.connectionState$.pipe(map((state) => {
//       // convert numeric RxStompState to string
//       return RxStompState[state];
//     }));
//   }
// }
