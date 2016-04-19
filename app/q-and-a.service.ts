import {Injectable}         from 'angular2/core';
import {Http, Response}     from 'angular2/http';
import 'rxjs/add/operator/toPromise';
import {QuestionAndAnswers} from './question-and-answers';

@Injectable() 
export class QandAService {
    constructor(private _http:Http) {}
    // public API
    getQuestionAndAnswers() {
        return this._http.get('./app/q-and-a.json')
            .toPromise()  // convert Observable to Promise
            .then(res => {
                console.log('res:', res, 'data:', res.json());    // debug
                return <QuestionAndAnswers> res.json(); })
            .catch(err => {
                console.log('error res:', err);
                if(err instanceof Response) {
                    return Promise.reject(err.text() || 'backend server error');
                }
                return Promise.reject(err); });
    }
}
