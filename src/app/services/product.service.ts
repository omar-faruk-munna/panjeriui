import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { delay } from "rxjs/operators";
import { IProduct } from "../models/product.model";

@Injectable()
export class ProductService {
    // rootUrl: string = "./assets/data/employees.json";
    rootUrl: string = "http://localhost:5000";
    list: IProduct[] = [];

    constructor(private _httpClient: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this._httpClient
            .get<IProduct[]>(this.rootUrl + "/api/Product")
            .pipe(catchError(this.handleError)); //, delay(2000)
    }

    //-----------------------------

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            //-- in real apps we log this database table
            //-- client side error
            console.error("Client side error ", errorResponse.message);
        } else {
            //-- in real apps we log this database table
            //-- server side error
            console.error("Server side error ", errorResponse);
        }
        //--- user friendly message for user
        return throwError(
            "There is a problem with the service. We are notified & working on it. Please try again later."
        );
    }
}
