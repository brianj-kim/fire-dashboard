import { Dispatch, SetStateAction } from 'react';
import { useAuthContext } from '../context/AuthContext';

type MemoCardProps = {
  id: string,
  content: string,
  createdAt: any,
  creator: string,
  toggle: () => void,
  onDelete: (id: string) => void,
  setMid: Dispatch<SetStateAction<string>>,
  setEditContent: Dispatch<SetStateAction<string>>
}

export default ({ id, content, createdAt, creator, toggle, onDelete, setMid, setEditContent }: MemoCardProps, ) => {
  const { user } = useAuthContext();
  const openModal = () => {
    setMid(id);
    setEditContent(content);
    toggle();    
  }

  return (
    <div className="relative max-w-[420px] justify-items-center mt-3 border border-gray-200 rounded-md p-3">
      {(user.uid === creator) ? (
          <span className="absolute top-1 right-2 text-right">
            <button type='button' className="px-1 text-xs rounded-full bg-green-700 text-white font-black" onClick={openModal} >E</button>
            <button type='button' className="ml-1 px-1 text-xs rounded-full bg-red-700 text-white font-black" onClick={()=>onDelete(id)} >D</button>
            
          </span> 
        ) : 
        null}      
      <p
        className="mb-3 text-gray-700 font-light text-lg pr-4"
      >
        { content }
      </p>
      <span className="py-2 text-xs mt-2 text-right">{ new Date(createdAt).toLocaleString() }</span>
    </div>
  );
};
