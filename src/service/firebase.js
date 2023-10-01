import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { get, getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const googleAuth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleAuth.useDeviceLanguage();

export function logIn() {
  signInWithPopup(googleAuth, googleProvider).catch(console.error);
}

export function logOut() {
  signOut(googleAuth).catch(console.error);
}

export function onUserStateChange(setUser, setAdmin) {
  onAuthStateChanged(googleAuth, async (user) => {
    const admin = await getAdmin();
    setAdmin(admin);
    setUser(user);
  });
}

const database = getDatabase(app);

async function getAdmin() {
  return get(ref(database, 'admins'))
    .then((snapshot) => snapshot.val())
    .catch(console.error);
}

export async function addNewProduct(product, image) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(','),
  });
}
