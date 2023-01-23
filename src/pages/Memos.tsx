import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection, orderBy, query, QuerySnapshot, Timestamp, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import MemoForm from "../components/MemoForm";
import MemoList from "../components/MemoList";

export interface MemoData {
  id: string,
  content: string,
  creator: string,
  createdAt: any,
}

export default () => {
  const [error, setError] = useState<string>('');
  const [memos, setMemos] = useState<MemoData[]>([]);

  const q = query(collection(db, "memos"), orderBy("createdAt", "desc"));

  const fetchMemo = () => {
      onSnapshot(q, (querySnapshot: QuerySnapshot)=> {
      const newData: MemoData[] = querySnapshot.docs.map((doc: any) => ({...doc.data(), id: doc.id}));
      // console.log(newData);
      setMemos(newData);   
    });      
  }
  
  const onCreateMemo = async ({ content, creator }: Partial<MemoData>) => {
    try {
      await addDoc(collection(db, 'memos'), {
        content,
        creator,
        createdAt: Timestamp.fromDate(new Date())
      });
    } catch (err: string | any) {
      setError(err);
      console.log(error);
    }
  }

  const onDelete = async (id: string) => {
    const dataRef = doc(db, 'memos', id);
    await deleteDoc(dataRef);
  }

  useEffect(() => {
    fetchMemo();
  
  },[]);
  

  return (
    <div className="flex flex-col items-center py-3 mt-6">      
      <div className="min-w-[420px] mx-auto flex flex-col justify-center">

        <MemoForm onSubmit={onCreateMemo} />
        <MemoList memos={memos} onDelete={onDelete}/>
              
      </div>
      
    </div>
  );
};
