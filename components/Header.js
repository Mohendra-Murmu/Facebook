import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div>
            {/**Left Section */}
            <div>
                <Image src="/logo.webp"
                    alt="Logo" width={40} height={40} layout="fixed" />
                <div>
                    <input type="text" placeholder='Search Facebook' />
                </div>
            </div>
            {/**Center Section */}

            {/**Right Section */}
        </div>
    )
}

export default Header