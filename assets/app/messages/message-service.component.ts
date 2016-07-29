import {Message} from "./message";
export class MessageServiceComponent{
    messages : Message[]=[];

    addMessage(message:Message){
        this.messages.push(message);
        console.log(message);
    }

    getMessage(){
        return this.messages;
    }

    editMessage(message:Message){
        this.messages[this.messages.indexOf(message)]=new Message('Editied',null,'Dummy');
    }

    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message),1);
    }
}
