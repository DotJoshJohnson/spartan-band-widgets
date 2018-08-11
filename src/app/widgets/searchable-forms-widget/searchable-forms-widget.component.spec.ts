import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchableFormsWidgetComponent } from "./searchable-forms-widget.component";

describe("SearchableFormsWidgetComponent", () => {
  let component: SearchableFormsWidgetComponent;
  let fixture: ComponentFixture<SearchableFormsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchableFormsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableFormsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
