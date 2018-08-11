import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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
  bootstrap: [AppComponent]
})
export class AppModule { }
