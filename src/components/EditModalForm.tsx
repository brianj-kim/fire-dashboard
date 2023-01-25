import { useRef } from "react";
import { AiOutlineCloseSquare } from 'react-icons/ai';
type EditContentProps = {
  mid: string,
  editContent: string,
  toggle: () => void,
  onUpdate: (mid: string, content: string) => void,
}

export default ({ mid, editContent, toggle, onUpdate }: EditContentProps) => {
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(mid, contentRef.current!.value);
    onUpdate(mid, contentRef.current!.value);
    toggle();
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if(e.key === 'Enter') {      
      
      toggle;
    }
  }

  return (    
    <form onSubmit={handleSubmit} className="w-full p-6 flex flex-col">
      <div className="flex justify-between">        
        <span className="text-lg">Edit Memo</span>
        <span className=""><AiOutlineCloseSquare onClick={toggle}/></span>
      </div>
      <input type="hidden" value={mid} />
      <textarea
        rows={5} 
        ref={contentRef} 
        className="border rounded-md p-3 my-4 shadow"
        required
        defaultValue={editContent}
      />
        
      <button 
        type='submit'
        className="w-full border border-indigo-600 bg-indigo-700 text-white font-bold py-2 rounded-md"
        >Update Memo</button>
      </form>

  );
};
