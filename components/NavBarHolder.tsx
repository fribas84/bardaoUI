import React from 'react'

interface Props {
    showModal: boolean,
    setShowModal: (showModal: boolean) => void,
    bardTknBal: string
}

const NavBarHolder = ({ showModal, setShowModal, bardTknBal }: Props) => {

    return (
        <div className="navbar bg-neutral text-neutral-content rounded-xl">
            <h1 className="btn btn-ghost normal-case text-l navbar-start">Current BardToken Balance: {bardTknBal}</h1>
            <div className='navbar-end mr-2'>
            <button
                    className="btn btn-secondary mr-2">Create subDAO</button>
                <button onClick={() => {
                    setShowModal(true);
                }
                }
                    className="btn btn-primary">Buy BardTokens</button>
               
            </div>
        </div>
    )
}

export default NavBarHolder