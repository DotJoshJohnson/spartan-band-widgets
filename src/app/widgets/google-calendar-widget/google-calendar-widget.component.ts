import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

import { GoogleCalendarEventList } from "./google-calendar-event-list.interface";
import { GoogleCalendarService } from "./google-calendar.service";

@Component({
    selector: "lsd-google-calendar-widget",
    templateUrl: "./google-calendar-widget.component.html",
    styleUrls: ["./google-calendar-widget.component.scss"],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class GoogleCalendarWidgetComponent implements OnInit {

    constructor(
        private _domSanitizer: DomSanitizer,
        private _googleCalendar: GoogleCalendarService
    ) { }

    @Input()
    calendarId: string | undefined;

    eventList: GoogleCalendarEventList | undefined;

    @Input()
    href = "#";

    ngOnInit(): void {
        this.refresh();
    }

    async refresh(): Promise<void> {
        if (!this.calendarId) {
            console.warn("Cannot refresh the calendar widget because a calendar ID was not provided.");

            return;
        }

        this.eventList = await this._googleCalendar.listEvents(this.calendarId);
    }

    trustHtml(html: string): SafeHtml {
        return this._domSanitizer.bypassSecurityTrustHtml(html);
    }

}
