import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sortByDate"
})
export class SortByDatePipe implements PipeTransform {

    transform(value: any[], getDateFn: Function): any[] {
        value.sort((a, b) => {
            const aDate = getDateFn(a);
            const bDate = getDateFn(b);

            return ((bDate as any) - (aDate as any));
        });

        return value.reverse();
    }

}
