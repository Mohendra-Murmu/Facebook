/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { useSession } from "next-auth/react"
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { db, storage } from '../firebase'
import { serverTimestamp, addDoc, collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from 'firebase/storage'

function InputBox() {
    const { data: session, status } = useSession();
    {/**For Get input from user ref */ }
    const inputRef = useRef(null);
    const filepickerRef = useRef(null)

    //We need a state to retan the image

    const [imageToPost, setImageToPost] = useState(null);
    const sendPost = async (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        //Firebase V9
        // 1) create a post and add to firestore 'posts collection        
        // 2) get the post ID for the newly crateed post
        // 3) upload the image to firebase storage with the post ID
        // 4) get a download URL from firebase storage and update to original post with image

        const docRef = await addDoc(collection(db, 'posts'), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            profilepic: session.user.image,
            image: session.user.image,
            timestamp: serverTimestamp()
        })

        const imageRef = ref(storage, `posts/${docRef.id}/image`)


        await uploadString(imageRef, imageToPost, "data_url").then(async Snapshot => {
            const DownloadURL = await getDownloadURL(imageRef);

            await updateDoc(doc(db, 'posts', docRef.id), {
                image: DownloadURL
            })
        });
        setImageToPost(null);

        inputRef.current.value = '';
    };

    const addImageToPost = (e) => {
        //initialize a reader that can read the file using this FileReader
        const reader = new FileReader();

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image
                    className='rounded-full'
                    src={session.user.image}
                    alt=""
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className='flex flex-1'>
                    <input
                        ref={inputRef}
                        type="text" placeholder={`What's on your mind, ${session.user.name}`}
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                    />
                    {/**For Hit Enter it will fire to submit so this 'hidden'  */}
                    <button hidden type='submit' onClick={sendPost}>Submit</button>
                </form>

                {/**Preview Selected Image */}

                {imageToPost && (
                    <div onClick={removeImage}
                        className="flex flex-col filter hover:brightness-110 transition duration-150
                     transform hover:scale-105  cursor-pointer">
                        <img src={imageToPost} alt=""
                            className="h-10 object-contain"
                        />
                        <p className='text-xs text-red-500'>Remove</p>
                    </div>
                )}
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                {/**onclick open a file picker for image using 'filepickerRef.current.click() */}
                <div className='inputIcon' onClick={() => filepickerRef.current.click()}>
                    <CameraIcon className='h-7 text-green-400' />
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    {/**onChange trigger the function 'addImageToPost' */}
                    <input ref={filepickerRef} type="file" hidden onChange={addImageToPost} />
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300' />
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox