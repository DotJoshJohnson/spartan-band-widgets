import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { GoogleCalendarEventList } from "./google-calendar-event-list.interface";

const ApiKey = "AIzaSyBlNk8Q2GyR96C-VQTC7Ci2_Hu__NTEBNY";
const BaseApiUrl = "https://www.googleapis.com/calendar/v3/calendars/";

@Injectable()
export class GoogleCalendarService {

    constructor(
        private _httpClient: HttpClient
    ) { }

    async listEvents(calendarId: string): Promise<GoogleCalendarEventList> {
        const httpParams = new HttpParams()
            .set("key", ApiKey)
            .set("orderBy", "startTime")
            .set("singleEvents", "true");

        return await this._httpClient.get(`${BaseApiUrl}/${calendarId}/events`, {
            params: httpParams
        })
            .pipe(map(x => x as GoogleCalendarEventList))
            .toPromise();
    }

}
