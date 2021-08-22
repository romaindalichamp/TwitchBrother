import {Injectable} from '@angular/core';
import {GameModel} from "../shared/model/game.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  savedData: GameModel[] = [];

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public saveGeneralInformations(gamesGeneralInfos: GameModel[]) {
    this.http.put(environment.twitchBrotherDataSnapshot, {gamesGeneralInformations: gamesGeneralInfos}, this.httpOptions)
    .toPromise().then((result) => {
      this.savedData = <GameModel[]>result;
      console.log(result);
    })
  }
}
