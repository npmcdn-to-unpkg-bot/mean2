var message_1 = require("./message");
var MessageServiceComponent = (function () {
    function MessageServiceComponent() {
        this.messages = [];
    }
    MessageServiceComponent.prototype.addMessage = function (message) {
        this.messages.push(message);
        console.log(message);
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
    return MessageServiceComponent;
})();
exports.MessageServiceComponent = MessageServiceComponent;
//# sourceMappingURL=message-service.component.js.map