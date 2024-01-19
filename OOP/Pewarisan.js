class MailService {
    constructor(sender, receiver, subject, body) {
      this.sender = sender;
      this.receiver = receiver;
      this.subject = subject;
      this.body = body;
    }
   
    // Methods
    send() {
      console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
    }
   
    sendLater(delay) {
      console.log(`Sending after ${delay} ms`);

      setTimeout(() => {
        this.send();
      }, delay);
    }

    saveAsDraft() {
      console.log('Saving mail as draft');
    }
  }

  // Subclass
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
      for (const receiver of receivers) {
        this.sendMessage(message, receiver);
      }
    }
  }
  
  // Subclass
  class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
      setTimeout(() => {
        this.sendMessage(message, receiver);
      }, delay);
    }
  }

const whatsapp = new WhatsAppService('+6281234567890');
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false