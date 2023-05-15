
import "./ChatGPT.css";
import { ReactComponent as RobotIcon } from '../images/robot-solid.svg';
import { ReactComponent as UserIcon} from "../images/user-solid.svg";
import { ReactComponent as MicIcon} from "../images/microphone-solid.svg";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from "react";
import { getResponseFromGPT } from "./Service";

export default function ChatGPT() {
    
    const [conversation, setConversation] = useState([]);
    const [waitingForResponse, setWaitingForResponse] = useState(false);

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

                let gptResponse = await getResponseFromGPT(input);

                setConversation([
                    ...conversation,
                    { text: gptResponse, user: false },
                ]);

                // setConversation([
                // ...conversation,
                // { text: "Hello Sir, How are you ?", user: false },
                // ]);
        
                console.log("Printing conversation list ",conversation);
                setWaitingForResponse(false);
            }
        }
      };


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
        return <div className="container">Browser doesn't support speech recognition</div>;
      }
    

    return (
        <div className="container d-flex justify-content-evenly myContainer">
            <div className="GPTResponse">
                <div>
                    <RobotIcon className="myRobotIcon"/>
                </div>
                <div className="myResponse">
                    {/* <textarea readOnly className="myTextArea"></textarea> */}
                    <div>

                        {conversation.map((msg, index) => (
                        <div key={index}>
                            <span>{msg.user}</span>
                            <span>{msg.text}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="UserInput">
                <div>
                    <UserIcon className="myUserIcon"></UserIcon>
                </div>
                <div>
                    <textarea className="myTextArea" value={transcript} readOnly />
                </div>
                <div className="myButtons">
                    <MicIcon className={listening ? 'myMicIconActive' : 'myMicIconInActive'} onClick={startConversation}></MicIcon>
                    <button type="button" className="btn btn-danger btn-sm myStopButton" onClick={endConversation}>End Conversation</button>
                </div>
            </div>
        </div>
    )

}