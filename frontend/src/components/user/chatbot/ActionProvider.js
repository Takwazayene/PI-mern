// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      //this.createClientMessage = createClientMessage;
    }
helloWorldHandler = () => {
  const message = this.createChatBotMessage("Hello !")
  this.setChatbotMessage(message)
}

testWorldHandler = () => {
  const message = this.createChatBotMessage("Test!")
  this.setChatbotMessage(message)
}

FirstQuestionHandler = () => {
  const message = this.createChatBotMessage("Enter your delivery QR code to claim please")
  this.setChatbotMessage(message)
}
SecondQuestionHandler = () => {
  const message = this.createChatBotMessage("You want to make a complaint about a delivery delay or missing delivery  or about the state of the package")
  this.setChatbotMessage(message)
}
FinalQuestionHandler  = () => {
  const message = this.createChatBotMessage("Your complaint has passed successfully ,thank you for your opinion")
  this.setChatbotMessage(message)
}

ByQuestionHandler  = () => {
  const message = this.createChatBotMessage("GoodBye !")
  this.setChatbotMessage(message)
}


setChatbotMessage = (message) => {
  this.setState(state=>({...state, messages: [...state.messages,message]}))
}

  }
  
  export default ActionProvider;