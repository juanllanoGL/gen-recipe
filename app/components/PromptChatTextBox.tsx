
interface chatLog {
  message: string;
  user: string;
  isBotTyping?: boolean;
}

export default function PromptChatTextBox({user, message}: chatLog) {

  return (
    <div className="prompt-chat-text-box">
      <div className={`flex items-center ${user === 'bot' ? 'justify-start': 'justify-end'} gap-2.5`}>
        <div className={`fex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 ${user === 'bot' ? 'bg-orange-100 rounded-ee-xl rounded-s-xl': 'bg-gray-100 rounded-e-xl rounded-es-xl'} dark:bg-gray-700`}>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{user}</span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
        </div>
      </div>
    </div>
  );
}