///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import {MessageServiceComponent} from './messages/message-service.component'

//noinspection TypeScriptCheckImport
import { AppComponent } from "./app.component";

bootstrap(AppComponent,[MessageServiceComponent]);