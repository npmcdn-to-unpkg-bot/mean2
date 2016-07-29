///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import {MessageServiceComponent} from './messages/message-service.component'
import {ROUTER_PROVIDERS} from '@angular/router'

//noinspection TypeScriptCheckImport
import { AppComponent } from "./app.component";

bootstrap(AppComponent,[MessageServiceComponent,ROUTER_PROVIDERS]);