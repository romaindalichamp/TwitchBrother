import {TwitchResponseSubMessageModel} from "./twitch-response-sub-message.model";

export interface TwitchResponseMessageModel {
  user_name: string;
  display_name: string;
  channel_name: string;
  user_id: string;
  channel_id: string;
  time: string;
  sub_plan: string;
  sub_plan_name: string;
  months: number;
  context: string;
  is_gift: boolean;
  sub_message: TwitchResponseSubMessageModel;
  recipient_id: string;
  recipient_user_name: string;
  recipient_display_name: string;
  multi_month_duration: number;
}

export class TwitchResponseMessageModel implements TwitchResponseMessageModel {
}
