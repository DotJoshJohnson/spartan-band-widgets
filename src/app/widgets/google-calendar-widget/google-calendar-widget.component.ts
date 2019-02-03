import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

import { GoogleCalendarEvent } from "./google-calendar-event.interface";
import { GoogleCalendarEventList } from "./google-calendar-event-list.interface";
import { GoogleCalendarService } from "./google-calendar.service";

@Component({
    selector: "lsd-google-calendar-widget",
    templateUrl: "./google-calendar-widget.component.html",
    styleUrls: ["./google-calendar-widget.component.scss"],
    encapsulation: ViewEncapsulation.Emulated
})
export class GoogleCalendarWidgetComponent implements OnInit {

    constructor(
        private _domSanitizer: DomSanitizer,
        private _googleCalendar: GoogleCalendarService
    ) { }

    @Input("calendar-id")
    calendarId: string | undefined;

    eventList: GoogleCalendarEventList | undefined;

    @Input()
    href = "#";

    getInclusiveEndDate(event: GoogleCalendarEvent): Date {
        return new Date(event.end.date || event.end.dateTime);
    }

    getStartDate(event: GoogleCalendarEvent): Date {
        return event.start.date || event.start.dateTime;
    }

    isMultiDay(event: GoogleCalendarEvent): boolean {
        if (!event.start.date || !event.end.date) {
            return false;
        }

        const start = new Date(event.start.date);
        const end = new Date(event.end.date);

        const multiDay = (start.getDate() !== (end.getDate() - 1));

        return multiDay;
    }

    async ngOnInit(): Promise<void> {
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
