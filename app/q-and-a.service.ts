import {Injectable}         from '@angular/core';
import {Http, Response}     from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {QuestionAndAnswers} from './question-and-answers';

@Injectable() 
export class QandAService {
    constructor(private _http:Http) {}
    // public API
    getQuestionAndAnswers() {
        return this._http.get('./app/q-and-a.json')
            .toPromise()  // convert Observable to Promise
            .then( (res:Response) => {
                console.log('res:', res, 'data:', res.json());    // debug
                return <QuestionAndAnswers> res.json(); })
            .catch( (err:any) => {
                console.log('error res:', err);
                if(err instanceof Response) {
                    return Promise.reject(err.text() || 'backend server error');
                }
                return Promise.reject(err); });
    }
}
