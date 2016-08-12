var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var message_1 = require("./message");
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/Rx');
var observable_1 = require('rxjs/observable');
var MessageServiceComponent = (function () {
    function MessageServiceComponent(_http) {
        this._http = _http;
        this.messages = [];
    }
    MessageServiceComponent.prototype.addMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post("http://localhost:3000/message", body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return observable_1.Observable.throw(error.json()); });
    };
    MessageServiceComponent.prototype.getMessage = function () {
        return this.messages;
    };
    MessageServiceComponent.prototype.editMessage = function (message) {
        this.messages[this.messages.indexOf(message)] = new message_1.Message('Editied', null, 'Dummy');
    };
    MessageServiceComponent.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageServiceComponent = __decorate([
        core_1.Injectable()
    ], MessageServiceComponent);
    return MessageServiceComponent;
})();
exports.MessageServiceComponent = MessageServiceComponent;
//# sourceMappingURL=message-service.component.js.map