import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Copy from './promptCopy.json'

interface PromptImputProps {
  value: string;
  defaultValue: string;
  onChangeText: (newText: string) => void;
}


export default function PromtImput ({value,defaultValue,onChangeText}: PromptImputProps) {

  return (
    <div className="promt-imput">
      <label htmlFor="prompt" className="bg-slate-50">{Copy.promptBlock.label}</label>
      <input type="text" id="prompt" name="prompt" value={value || ""} onChange={(event)=>{
        event.preventDefault()
        onChangeText(event.target.value)
      }}/>
      <button className="button-search-icon"type="submit"><MagnifyingGlassIcon className="h-6 w-6 text-blue-500"/></button>
      <span className='default-prompt-text '>{defaultValue}</span>
    </div>
  )
}
