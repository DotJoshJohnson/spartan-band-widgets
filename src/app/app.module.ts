import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { GoogleCalendarWidgetComponent } from "./widgets/google-calendar-widget/google-calendar-widget.component";

@NgModule({
    declarations: [
        AppComponent,
        GoogleCalendarWidgetComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        GoogleCalendarWidgetComponent
    ],
    entryComponents: [GoogleCalendarWidgetComponent]
})
export class AppModule {

    constructor(public injector: Injector) {
        const googleCalendarWidget = createCustomElement(GoogleCalendarWidgetComponent, { injector });

        customElements.define("lsd-google-calendar", googleCalendarWidget);
    }

    // required by convention for Angular Elements
    ngDoBootstrap(): void { }

}
