// Config starter code
import React from 'react' ;
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar/BotAvatar";
import Todos from   "./Todos/Todos"

const config = {
  initialMessages: [createChatBotMessage(`Hello , are you satisfied for our services?`),],
  botName:"SmartDeliveryBot",
  customComponents : {
    botAvatar : (props) => <BotAvatar {...props}/>
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
     // backgroundColor: "#376B7E",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "hsla(24, 100%, 54%, 0.871)",
    },
  },
  state:{
    //todos : []
  },
 /* widgets: [
    {
      widgetName: "todos",
      widgetFunc: (props) => <Todos {...props} />,
      mapStateToProps: ["todos"],

    }
  ]*/
}

export default config