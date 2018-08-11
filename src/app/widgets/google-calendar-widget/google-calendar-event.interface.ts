export interface GoogleCalendarEvent {
    id: string;
    status: string;
    htmlLink: string;
    created: Date;
    updated: Date;
    summary: string;
    description: string;
    location: string;
    start: { dateTime: Date };
    end: { dateTime: Date };
}
