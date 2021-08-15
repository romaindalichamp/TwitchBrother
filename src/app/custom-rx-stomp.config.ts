import {InjectableRxStompConfig} from '@stomp/ng2-stompjs';
import {environment} from "../environments/environment";

export const CustomRxStompConfig: InjectableRxStompConfig = {
  brokerURL: environment.wsTwitchBrotherBack,
  reconnectDelay: 5000,

  // debug: (msg: string): void => {
    // console.log(new Date(), msg);
  // }
};
