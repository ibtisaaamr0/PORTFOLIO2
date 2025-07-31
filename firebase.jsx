import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: ApiKey,
  authDomain: AuthDomain,
  projectId: ProjectId,
  storageBucket: StorageBucket,
  messagingSenderId: MessagingSenderid,
  appId: AppId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{db}