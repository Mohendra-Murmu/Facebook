import { ChatIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { EmojiHappyIcon, HeartIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

function Post({ name, message, profilepic, postimg, timestamp }) {
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2'>
                    <Image src={profilepic} alt={name} width={40} height={40} className="rounded-full" />
                    <div>
                        <p className='font-medium'>{name}</p>
                        <p className='text-xs text-gray-400'>
                            {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                    </div>
                </div>
                <p className='pt-4'>{message}</p>
            </div>
            {postimg && (
                <div className='relative w-full h-72 md:h-96 max-h-80 bg-white'>
                    <Image src={postimg}
                        objectFit="cover"
                        layout='fill'
                        alt=''
                        className='w-full h-72 max-h-80'
                    />
                </div>
            )}
            <div className="w-full flex flex-col space-y-2 p-2 px-4 bg-white">
                <div className="flex items-center justify-between pb-2 border-b border-gray-300 text-gray-500 text-sm">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full text-white">
                                <HeartIcon className='text-red-700' />
                            </button>
                            <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-primary text-white">
                                <ThumbUpIcon className='text-blue-700' />
                            </button>
                            <button className="focus:outline-none flex  items-center justify-center w-4 h-4 rounded-full  text-white">
                                <EmojiHappyIcon className='text-yellow-400' />
                            </button>
                            <div className="ml-1">
                                <p>130K</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button>1.2K Comments</button>
                        <button>9 Shares</button>
                    </div>
                </div>
                <div className="flex space-x-3 text-gray-500 text-sm font-thin">
                    <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
                        <div>
                            <ThumbUpIcon className='h-6' />
                        </div>
                        <div>
                            <p className="font-semibold">Like</p>
                        </div>
                    </button>
                    <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
                        <div>
                            <ChatIcon className='h-6' />
                        </div>
                        <div>
                            <p className="font-semibold">Comment</p>
                        </div>
                    </button>
                    <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
                        <div>
                            <ShareIcon className='h-6' />
                        </div>
                        <div>
                            <p className="font-semibold">Share</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post