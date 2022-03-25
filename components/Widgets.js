import { BellIcon, DotsHorizontalIcon, SearchIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import { useSession } from 'next-auth/react'

function Widgets() {
    const { data: session, status } = useSession();
    return (
        <div className=" h-auto py-3 pr-2">
            <div className="w-full text-gray-600 border-b-2 pb-2 mb-2 border-gray-300">
                <p className="font-semibold mb-2">Your Pages</p>
                <li className="h-12 mb-2 flex items-center -ml-3 justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                    <div>
                        <Image width={40} height={40}
                            className="w-8 h-8 rounded-full"
                            src={session.user.image}
                            alt="user"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">{session.user.name}</p>
                    </div>
                </li>
                <ul className="text-gray-500 text-sm">
                    <li className="h-8 mb-2 flex items-center justify-content cursor-pointer space-x-3 p-2 rounded-md hover:bg-gray-200">
                        <div>
                            <BellIcon className='h-4' />
                        </div>
                        <div>
                            <p className="text-xs">Notification</p>
                        </div>
                    </li>
                    <li className="h-8 flex items-center justify-content cursor-pointer space-x-3 p-2 rounded-md hover:bg-gray-200">
                        <div>
                            <SpeakerphoneIcon className='h-4' />
                        </div>
                        <div>
                            <p className="text-xs">Create promotion</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex items-center justify-between mb-2 p-2 text-gray-600">
                    <div>
                        <p className="text-sm font-semibold">Contacts</p>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <button className="w-6  h-6 focus:outline-none rounded-full hover:bg-gray-200">
                            <VideoCameraIcon className='h-4' />
                        </button>
                        <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
                            <SearchIcon className='h-4' />
                        </button>
                        <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
                            <DotsHorizontalIcon className='h-4' />
                        </button>
                    </div>
                </div>
                <div className="-ml-2">
                    <ul className="w-full text-gray-600">
                        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                            <div>
                                <Image width={40} height={40}
                                    className="w-8 h-8 rounded-full"
                                    src="https://links.papareact.com/zvy"
                                    alt="user"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Saiful Islam Shihab</p>
                            </div>
                        </li>
                        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                            <div>
                                <Image width={40} height={40}
                                    className="w-8 h-8 rounded-full"
                                    src="https://links.papareact.com/r57"
                                    alt="user"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Travarsy Media</p>
                            </div>
                        </li>
                        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                            <div>
                                <Image width={40} height={40}
                                    className="w-8 h-8 rounded-full"
                                    src="https://links.papareact.com/6gg"
                                    alt="user"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Ben Awad</p>
                            </div>
                        </li>
                        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                            <div>
                                <Image width={40} height={40}
                                    className="w-8 h-8 rounded-full"
                                    src="https://links.papareact.com/snf"
                                    alt="user"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Fireship io</p>
                            </div>
                        </li>
                        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                            <div>
                                <Image width={40} height={40}
                                    className="w-8 h-8 rounded-full"
                                    src="https://links.papareact.com/kxk"
                                    alt="user"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Shihab md</p>
                            </div>
                        </li>
                        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                            <div>
                                <Image width={40} height={40}
                                    className="w-8 h-8 rounded-full"
                                    src="https://links.papareact.com/kxk"
                                    alt="user"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Groups</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Widgets