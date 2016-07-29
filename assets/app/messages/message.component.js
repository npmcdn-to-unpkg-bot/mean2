var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MessageComponent = (function () {
    function MessageComponent(_messageServiceComponent) {
        this._messageServiceComponent = _messageServiceComponent;
        this.editClicked = new core_1.EventEmitter();
    }
    MessageComponent.prototype.onEdit = function (message) {
        this._messageServiceComponent.editMessage(message);
    };
    MessageComponent.prototype.onDelete = function (message) {
        this._messageServiceComponent.deleteMessage(message);
    };
    __decorate([
        core_1.Input()
    ], MessageComponent.prototype, "message");
    __decorate([
        core_1.Output()
    ], MessageComponent.prototype, "editClicked");
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            styleUrls: ['js/app/messages/message.component.css'],
            templateUrl: 'js/app/messages/message.component.html'
        })
    ], MessageComponent);
    return MessageComponent;
})();
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map