import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";

import { GoogleCalendarWidgetComponent } from "./widgets/google-calendar-widget/google-calendar-widget.component";
import { SortByDatePipe } from "./widgets/google-calendar-widget/sort-by-date.pipe";

@NgModule({
    declarations: [
        GoogleCalendarWidgetComponent,
        SortByDatePipe
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [],
    entryComponents: [
        GoogleCalendarWidgetComponent
    ]
})
export class AppModule {

    constructor(public injector: Injector) {
        const googleCalendarWidget = createCustomElement(GoogleCalendarWidgetComponent, { injector });

        customElements.define("lsd-google-calendar", googleCalendarWidget);
    }

    // required by convention for Angular Elements
    ngDoBootstrap(): void { }

}
