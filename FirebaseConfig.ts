import { initializeApp } from 'firebase/app';
import { initializeAuth } from '@firebase/auth';
//@ts-ignore
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {
  APP_API_KEY,
  APP_AUTH_DOMAIN,
  APP_PROJECT_ID,
  APP_STORAGE_BUCKET,
  APP_MESSAGING_SENDER_ID,
  APP_APP_ID,
} from '@env';

const firebaseConfig = {
  apiKey: APP_API_KEY,
  authDomain: APP_AUTH_DOMAIN,
  projectId: APP_PROJECT_ID,
  storageBucket: APP_STORAGE_BUCKET,
  messagingSenderId: APP_MESSAGING_SENDER_ID,
  appId: APP_APP_ID,
};
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
