import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

import { WordpressMediaItem } from "./wordpress-media-item.interface";
import { WordpressService } from "./wordpress.service";

@Component({
    selector: "lsd-searchable-forms-widget",
    templateUrl: "./searchable-forms-widget.component.html",
    styleUrls: ["./searchable-forms-widget.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class SearchableFormsWidgetComponent implements OnInit {

    constructor(
        private _domSanitizer: DomSanitizer,
        private _wordpress: WordpressService
    ) { }

    mediaItems: WordpressMediaItem[] = [];
    query = "";

    getFilteredMediaItems(): WordpressMediaItem[] {
        return this.mediaItems.filter(x => {
            if (!this.query) {
                return true;
            }

            if (x.caption) {
                return (x.caption.rendered.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
            }

            else if (x.slug) {
                return (x.slug.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
            }
        });
    }

    async ngOnInit(): Promise<void> {
        this.mediaItems = await this._wordpress.getMediaForCurrentPage();
    }

    trustHtml(html: string): SafeHtml {
        return this._domSanitizer.bypassSecurityTrustHtml(html);
    }

}
