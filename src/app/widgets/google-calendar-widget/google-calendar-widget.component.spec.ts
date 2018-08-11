import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GoogleCalendarWidgetComponent } from "./google-calendar-widget.component";

describe("GoogleCalendarWidgetComponent", () => {
  let component: GoogleCalendarWidgetComponent;
  let fixture: ComponentFixture<GoogleCalendarWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleCalendarWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCalendarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
