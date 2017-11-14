// NOTE: This service has been updated to use the new HttpClientModule,
// which is part of Angular v5. It also no longer converts the Observable
// to a Promise.

import { Injectable }                    from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable }                    from 'rxjs/Observable';
import { catchError }                    from 'rxjs/operators';
import { QuestionAndAnswers }            from './interfaces';
import 'rxjs/add/observable/throw';

@Injectable() 
export class QandAService {
    assetUrl = './assets/q-and-a.json';
    //assetUrl = './assets/bad-url.json';  // use this line instead to generate an error
    constructor(private _http:HttpClient) {}
    private handleError(operation: String) {
        return (err: any) => {
            let errMsg = `error in ${operation}() retrieving ${this.assetUrl}`;
            console.log(`${errMsg}:`, err)
            if(err instanceof HttpErrorResponse) {
                // you could extract more info about the error if you want, e.g.:
                console.log(`status: ${err.status}, ${err.statusText}`);
                // errMsg = ...
            }
            return Observable.throw(errMsg);
        }
    }
    // public API
    // new way, returning an Observable
    getQuestionAndAnswers() : Observable<QuestionAndAnswers> {
        // HttpClient.get() returns the body of the response as an untyped JSON object.
        // We specify the type as QuestionAndAnswers to get a typed result.
        return this._http.get<QuestionAndAnswers>(this.assetUrl)
            .pipe(
                catchError(this.handleError('getQuestionAndAnswers'))
            );
    }
    // old way, returning a promise:
    //getQuestionAndAnswers() {
    //    return this._http.get('./app/q-and-a.json')
    //        .toPromise()  // convert Observable to Promise
    //        .then( (res:Response) => {
    //            console.log('res:', res, 'data:', res.json());    // debug
    //            return <QuestionAndAnswers> res.json(); })
    //        .catch( (err:any) => {
    //            console.log('error res:', err);
    //            if(err instanceof Response) {
    //                return Promise.reject(err.text() || 'backend server error');
    //            }
    //            return Promise.reject(err); });
    //}
}
