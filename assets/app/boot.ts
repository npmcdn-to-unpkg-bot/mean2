///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import {MessageServiceComponent} from './messages/message-service.component';
import {AuthServiceComponent} from './auth/auth-service.component';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router'
import {provide} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http';

//noinspection TypeScriptCheckImport
import { AppComponent } from "./app.component";

bootstrap(AppComponent,[MessageServiceComponent,AuthServiceComponent,ROUTER_PROVIDERS,provide(LocationStrategy,{useClass:HashLocationStrategy}),HTTP_PROVIDERS]);