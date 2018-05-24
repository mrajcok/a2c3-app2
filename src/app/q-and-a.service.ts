import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable }                    from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap }               from 'rxjs/operators';
import { QuestionAndAnswers }            from './interfaces';


@Injectable()
export class QandAService {
    assetUrl = './assets/q-and-a.json3';
    // assetUrl = './assets/bad-url.json';  // use this line instead to generate an error
    constructor(private _http: HttpClient) {}
    private handleError(operation: String, url: string) {
        return (err: any) => {
            const errMsg = `error in ${operation}() retrieving ${url}`;
            console.log(`${errMsg}:`, err);
            if (err instanceof HttpErrorResponse) {
                // you could extract more info about the error if you want, e.g.:
                console.log(`status: ${err.status}, ${err.statusText}`);
                // errMsg = ...
            }
            return observableThrowError(errMsg);
        };
    }
    // public API
    getQuestionAndAnswers(): Observable<QuestionAndAnswers> {
        // HttpClient.get() returns the body of the response as an untyped JSON object
        // by default.
        // We specify the type as QuestionAndAnswers to get a typed result.
        return this._http.get<QuestionAndAnswers>(this.assetUrl)
            .pipe(
                tap(data => console.log('server data:', data)),
                catchError(this.handleError('getQuestionAndAnswers', this.assetUrl))
            );
    }
}
