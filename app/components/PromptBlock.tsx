import { PromptChatBox, PromtImput } from ".";
import {useState} from "react";
import { Poppins } from "next/font/google";
import Copy from './promptCopy.json'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"]
});


export default function PromptBlock() {
  const [prompt, setPrompt] = useState("");
  const [defaultText, setDefaultText] = useState(Copy.promptBlock.defaultText[1]);

  const changeText = (newText: string) => {
    setPrompt(newText)
    if (newText) {
      console.log("User entered text")
      setDefaultText("")
    } else {
      console.log("User cleared text")
      setDefaultText(Copy.promptBlock.defaultText[Math.floor(Math.random() * Copy.promptBlock.defaultText.length)] || Copy.promptBlock.defaultText[0])
    }
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault()
    console.log("User submitted text")
  }
  const handleAction = (searchPrompt: string, formData: React.FormEvent<HTMLFormElement>) => {
    //vent.preventDefault()
    console.log("User submitted text")
  }

  const addProductToCart = handleAction.bind(null, prompt);

  return (
    <form className={`prompt-block`} onSubmit={handleSubmit} >
      <h2 className={poppins.className}>{Copy.promptBlock.title}</h2>
      <h3>{Copy.promptBlock.description}</h3>
      <PromptChatBox chatLog={[]} isBotTyping={false} />
      <PromtImput value={prompt} defaultValue={defaultText} onChangeText={changeText}/>
    </form>
  );
}
