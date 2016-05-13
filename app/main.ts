import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
//import {enableProdMode} from '@angular/core';

//enableProdMode();
bootstrap(AppComponent)
   .catch( (err:any) => console.error(err));