import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { WordpressMediaItem } from "./wordpress-media-item.interface";

@Injectable({
    providedIn: "root"
})
export class WordpressService {

    constructor(
        private _httpClient: HttpClient
    ) { }

    getCurrentPageId(): number {
        const body = document.body;
        const bodyClasses = Array.from(body.classList);
        const pageIdBodyClass = bodyClasses.find(x => x.startsWith("page-id-"));

        if (!pageIdBodyClass) {
            throw new Error("Unable to resolve the current page's ID.");
        }

        return Number.parseInt(pageIdBodyClass.substr(8));
    }

    async getMediaForCurrentPage(): Promise<WordpressMediaItem[]> {
        const pageId = this.getCurrentPageId();

        const params = new HttpParams()
            .set("parent", pageId.toString());

        const items = await this._httpClient.get("/wp-json/wp/v2/media", { params })
            .pipe(map(x => x as WordpressMediaItem[]))
            .toPromise();

        return items;
    }

}
