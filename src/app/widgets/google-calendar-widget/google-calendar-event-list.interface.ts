import { GoogleCalendarEvent } from "./google-calendar-event.interface";

export interface GoogleCalendarEventList {
    summary: string;
    updated: Date;
    timeZone: string;
    items: GoogleCalendarEvent[];
}
