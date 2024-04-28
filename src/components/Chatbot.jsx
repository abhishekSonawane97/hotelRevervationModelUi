import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react'



const Chatbot = () => {

    const steps = [
        {
            id:'Greet',
            message : "Hello, Welcome to our website",
            trigger : "Ask Help"
        },
        {
            id : "Ask Help",
            message : "What is your name ?",
            trigger : 'waiting1',
        },
        {
            id : "waiting1",
            user : true,
            trigger : 'help',
        },
        {
            id : "help",
            message : 'Hi {previousValue}, Please select your issue',
            trigger : 'issues',
        },
        {
            id : "issues",
            options :[
                { value : "Reserve Desk", label : 'Reserve Desk', trigger : 'reseveDesk' },
                { value : "Room Book", label : 'Room Book', trigger : 'roomBook' },
                { value : "Room Book", label : 'Room Book', trigger : 'roomBook' },
            ] ,
            trigger : 'issues',
        },
        {
            id : 'reseveDesk',
            message : "Thanks for telling us the issue Our representative will connect with you.",
            end : true
        },
        {
            id : 'roomBook',
            message : "Thanks for telling us the issue Our representative will connect with you.",
            end : true
        },
    ]
  return (
    <Segment floated="right" >
      <ChatBot steps={steps} />
    </Segment>
  )
}

export default Chatbot
