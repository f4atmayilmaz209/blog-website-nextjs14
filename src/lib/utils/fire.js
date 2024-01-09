export const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: "nextjs-posts-94459",
    storageBucket: "nextjs-posts-94459.appspot.com",
    messagingSenderId: "858890985436",
    appId:process.env.appId,
    measurementId: "G-XCW1LNW79D"
};

export const firebaseStroageURL ="gs://nextjs-posts-94459.appspot.com";

import { initializeApp } from "firebase/app"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"


const app = initializeApp(firebaseConfig)
const storage = getStorage(app, firebaseStroageURL)
const createUniqueFileName = (getFile) => {
    const timeStamp = Date.now()
    const randomStringValue = Math.random().toString(36).substring(2, 12)
    return `${getFile.name}-${timeStamp}-${randomStringValue}`;
}
export async function helperForUploadingImageToFirebase(file) {
    const getFileName = createUniqueFileName(file)
    const storageReference = ref(storage, `posts/${getFileName}`);
    const uploadImage = uploadBytesResumable(storageReference, file)
    return new Promise((resolve, reject) => {
        uploadImage.on('state_changed', (snapshot) => {

        }, (error) => {
            console.log(error)
            reject(error)
        }, () => {
            getDownloadURL(uploadImage.snapshot.ref).then(downloadUrl => resolve(downloadUrl)).catch(error => reject(error))
        })
    })
}