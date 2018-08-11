export interface GoogleCalendarEvent {
    id: string;
    status: string;
    htmlLink: string;
    created: Date;
    updated: Date;
    summary: string;
    description: string;
    location: string;
    start: { date: Date, dateTime: Date };
    end: { date: Date, dateTime: Date };
}
