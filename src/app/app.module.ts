import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { GoogleCalendarWidgetComponent } from "./widgets/google-calendar-widget/google-calendar-widget.component";
import { SearchableFormsWidgetComponent } from "./widgets/searchable-forms-widget/searchable-forms-widget.component";

const MaterialModules = [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    declarations: [
        GoogleCalendarWidgetComponent,
        SearchableFormsWidgetComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModules,
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    entryComponents: [
        GoogleCalendarWidgetComponent,
        SearchableFormsWidgetComponent
    ]
})
export class AppModule {

    constructor(public injector: Injector) {
        const googleCalendarWidget = createCustomElement(GoogleCalendarWidgetComponent, { injector });
        const searchableFormsWidget = createCustomElement(SearchableFormsWidgetComponent, { injector });

        customElements.define("lsd-google-calendar", googleCalendarWidget);
        customElements.define("lsd-searchable-forms", searchableFormsWidget);
    }

    // required by convention for Angular Elements
    ngDoBootstrap(): void { }

}
