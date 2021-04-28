// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
     const lowercase=message.toLowerCase();

     if (lowercase.includes("hello")) {
       //console.log("Hi!")
       this.actionProvider.helloWorldHandler();
     }

     if (lowercase.includes("test")) {
      //console.log("Hi!")
      this.actionProvider.testWorldHandler();
    }
    if (lowercase.includes("no") ) {
      //console.log("Hi!")
      this.actionProvider.FirstQuestionHandler();
    }
    if (message.includes( "1") || message.includes( "2") || message.includes( "3") || message.includes( "4") || message.includes( "5") || message.includes( "6") || message.includes( "7")  ){
      //console.log("Hi!")
      this.actionProvider.SecondQuestionHandler();
    }

    if (lowercase.includes( "delay") || message.includes( "missing") || message.includes( "state")   ){
      //console.log("Hi!")
      this.actionProvider.FinalQuestionHandler();
    }

    if (lowercase.includes("by") ) {
      //console.log("Hi!")
      this.actionProvider.ByQuestionHandler();
    }
    
    

    }
  }
  
  export default MessageParser;  