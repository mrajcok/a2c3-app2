import {Injectable} from '@angular/core';

@Injectable() 
export class RememberService<T> {
    content: T;
    // public API
    save(content: T) {
        // http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object
        this.content = JSON.parse(JSON.stringify(content));
    }
    recall(): T {
        return this.content;
    }
}
