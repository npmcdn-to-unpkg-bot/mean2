var Message = (function () {
    function Message(content, messageId, username, userId) {
        this.content = content;
        this.messageId = messageId;
        this.userId = userId;
        this.username = username;
    }
    return Message;
})();
exports.Message = Message;
//# sourceMappingURL=message.js.map