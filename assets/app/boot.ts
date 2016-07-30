///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import {MessageServiceComponent} from './messages/message-service.component';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router'
import {provide} from '@angular/core'

//noinspection TypeScriptCheckImport
import { AppComponent } from "./app.component";

bootstrap(AppComponent,[MessageServiceComponent,ROUTER_PROVIDERS,provide(LocationStrategy,{useClass:HashLocationStrategy})]);