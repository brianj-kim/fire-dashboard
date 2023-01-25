
import { Dispatch, SetStateAction } from "react";
import { MemoData } from "../pages/Memos";
import MemoCard from "./MemoCard";

type MemoListProps = {
  memos: MemoData[],
  modalToggle: () => void,
  onDelete: (id:string) => void,  
  setMid: Dispatch<SetStateAction<string>>,
  setEditContent: Dispatch<SetStateAction<string>>
}

export default ({ memos, modalToggle, onDelete, setMid, setEditContent }: MemoListProps) => {   

  return (
    <div className="mt-12 ">      
      {memos.map((memo: MemoData, i: number) => (
        <div key={i} className="flex flex-col my-3" >
          <MemoCard 
            id={memo.id} 
            content={memo.content} 
            createdAt={memo.createdAt.seconds} 
            creator={memo.creator}  
            onDelete={onDelete}
            toggle={modalToggle}
            setMid={setMid}
            setEditContent={setEditContent}
          />
        </div>
      ))}
    </div>
  );
};
