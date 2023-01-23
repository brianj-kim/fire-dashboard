
import { MemoData } from "../pages/Memos";
import MemoCard from "./MemoCard";

type MemoListProps = {
  memos: MemoData[],
  onDelete: (id:string) => void,
}

export default ({ memos, onDelete }: MemoListProps) => {   

  return (
    <div className="mt-12 ">      
      {memos.map((memo: MemoData, i: number) => (
        <div key={i} className="flex flex-col" >
          <MemoCard id={memo.id} content={memo.content} createdAt={memo.createdAt.seconds} creator={memo.creator} onDelete={onDelete}/>
        </div>
      ))}
    </div>
  );
};
