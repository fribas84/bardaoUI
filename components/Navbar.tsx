import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="navbar bg-primary text-primary-content rounded-xl">
            <Link href="/" className="btn btn-ghost normal-case text-xl navbar-start">barDAO</Link>
            <div className='navbar-end'>
                <ConnectButton
                    showBalance={false}
                    chainStatus={{ smallScreen: "icon", largeScreen: "name" }}
                />
            </div>
        </div>
    )
}

export default Navbar
