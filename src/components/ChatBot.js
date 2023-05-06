







import React, { useState } from "react";
// import SpeechRecognition from "react-speech-recognition";
import axios from "axios";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Chatbot = () => {
  const [conversation, setConversation] = useState([]);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
//   const [isFetchingResponse, setIsFetchingResponse] = useState(false);

  const startConversation = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
  };

  const endConversation = () => {
    SpeechRecognition.stopListening();
  };

  const handleVoiceInput = async (input) => {
    console.log("Inside handleVoiceInput");
    console.log("Printing response status ",waitingForResponse);
    console.log("Printing input ",input);
    if (!waitingForResponse) {
        if(input != "") {
            setWaitingForResponse(true);
            setConversation([...conversation, { text: input, user: true }]);
            setConversation([
            ...conversation,
            { text: "Hello Sir, How are you ?", user: false },
            ]);
    
            console.log("Printing conversation list ",conversation);
            setWaitingForResponse(false);
        }
    }
  };

  const recognitionOptions = {
    onstart: () => console.log("Voice recognition started"),
    onend: () => console.log("Voice recognition ended"),
    onresult: (event) => {
        console.log("Inside onresult event ",event);
      const input = event.results[event.results.length - 1][0].transcript;
      console.log(`User said: ${input}`);
      handleVoiceInput(input);
    },
    continuous: false,
  };

//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition(recognitionOptions);

const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition({
    transcribing: true,
    clearTranscriptOnListen: true,
    commands: [
      {
        command: '*',
        callback: (input) => {
          console.log(`User said: ${input}`);
          handleVoiceInput(input);
        },
        matchInterim: false,
      },
    ],
  });



  if (!browserSupportsSpeechRecognition) {
    return <div>Browser doesn't support speech recognition</div>;
  }

  return (
    <div>
      <div>
        <button onClick={startConversation}>Start conversation</button>
        <button onClick={endConversation}>End conversation</button>
      </div>
      <textarea value={transcript} readOnly />
      <div>
        This is second div
        {conversation.map((msg, index) => (
          <div key={index}>
            <span>{msg.user ? "User: " : "Chatbot: "}</span>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
