import { FormEvent, useRef, KeyboardEvent } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { MemoData } from '../pages/Memos';

type MemoFormProps = {
  onSubmit: (data: Partial<MemoData>) => void
}

export default ({ onSubmit }: MemoFormProps) => {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { user } = useAuthContext();

  const handleWriteMemo = (e: any) => {
    e.preventDefault();

    onSubmit({
      content: contentRef.current!.value,
      creator: user && user.uid,
    });

    contentRef.current!.value = "";
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //console.log(e.key);
    if(e.key === 'Enter') {
      handleWriteMemo(e);      
    }
  }

  return (
    <div className="min-w-[420px] mx-auto flex flex-col justify-center">
      <form ref={formRef} onSubmit={handleWriteMemo} className="w-full flex flex-col">        
        <textarea
          rows={5} 
          ref={contentRef} 
          className="border rounded-md p-3 my-4 shadow"
          required
          placeholder="Memo"
          onKeyDown={handleKeyDown}
        ></textarea>
        <button 
          type='button'
          className="w-full border border-indigo-600 bg-indigo-700 text-white font-bold py-2 rounded-md"
          onClick={handleWriteMemo}
          >Write A Memo</button>
        </form>        
    </div>
  );
};
