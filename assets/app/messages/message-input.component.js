var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var message_1 = require("./message");
var message_service_component_1 = require("./message-service.component");
var MessageInputComponent = (function () {
    function MessageInputComponent() {
    }
    MessageInputComponent.prototype.onCreate = function (content) {
        var message = new message_1.Message(content, null, 'Dummy');
        this._messageService.addMessage(message);
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            templateUrl: 'js/app/messages/message-input.template.html',
            providers: [message_service_component_1.MessageServiceComponent]
        })
    ], MessageInputComponent);
    return MessageInputComponent;
})();
exports.MessageInputComponent = MessageInputComponent;
//# sourceMappingURL=message-input.component.js.map