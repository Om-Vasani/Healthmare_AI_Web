import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
export async function saveMessage(uid, role, text, meta = {}) {
  try {
    await addDoc(collection(db, 'chats'), {
      uid, role, text, meta, createdAt: serverTimestamp()
    });
  } catch (err) {
    console.error("saveMessage error", err);
  }
}
