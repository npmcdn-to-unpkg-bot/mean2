var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var message_component_1 = require("./message.component");
var MessageListComponent = (function () {
    function MessageListComponent(_messageServiceComponent) {
        this._messageServiceComponent = _messageServiceComponent;
        this.messages = [];
    }
    MessageListComponent.prototype.ngOnInit = function () {
        this.messages = this._messageServiceComponent.getMessage();
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            templateUrl: 'js/app/messages/message-list.component.html',
            directives: [message_component_1.MessageComponent]
        })
    ], MessageListComponent);
    return MessageListComponent;
})();
exports.MessageListComponent = MessageListComponent;
//# sourceMappingURL=message-list.component.js.map