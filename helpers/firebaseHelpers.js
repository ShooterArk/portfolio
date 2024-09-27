import { firebaseDB } from '@/firebase.config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export const addUserMeta = async (userMetaProps) => {
  let userId = null;

  userMetaProps.createdAt = serverTimestamp();

  await addDoc(collection(firebaseDB, "leads"), userMetaProps)
    .then((response) => {
      console.log("AddDoc response", response?.id, response);
      userId = response?.id;
    })
    .catch((err) => {
      console.log("Unable to register a user in firebase", err);
    });

  return userId;
};