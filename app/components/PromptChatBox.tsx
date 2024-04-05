import PromptChatTextBox from "./PromptChatTextBox";

interface chatLog {
  message: string;
  user: string;
}
interface PromptImputProps {
  chatLog: chatLog[];
  isBotTyping: boolean;
}
const dataUI = [{
  message: "Hi! How can I help you today?",
  user: "bot"
},
{ message: "Hi! How can I help you today?", user: "user"}
]

export default function PromptChatBox({}: PromptImputProps) {

  return (
    <div className="prompt-chat-box">
      <div className="prompt-chat-box__body bg-slate-200 p-3 inner shadow-inner rounded">
        <div className="prompt-chat-box__message">
          <p>Hi! How can I help you today?</p>
        </div>
        <div className="prompt-chat-box__message">
          <p>Hi! How can I help you today?</p>
        </div>
        {dataUI.map((data) => {
          return <PromptChatTextBox user={data.user} message={data.message} isBotTyping={false} />
        })}
      </div>
    </div>
  );
}