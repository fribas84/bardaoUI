import React from 'react'

interface Props {
    showModal: boolean,
    setShowModal: (showModal: boolean) => void,
    showModalCreateSubDAO: boolean,
    setShowModalCreateSubDAO: (showModal: boolean) => void,
    bardTknBal: string
}

const NavBarHolder = ({ showModal, setShowModal, showModalCreateSubDAO, setShowModalCreateSubDAO, bardTknBal }: Props) => {

    return (
        <div className="navbar bg-neutral text-neutral-content rounded-xl">
            {bardTknBal && 
            <p className="normal-case text-l navbar-start">Current BardToken Balance: {bardTknBal}</p>
            }
            <div className='navbar-end mr-2'>
                <button
                    className="btn btn-secondary mr-2"
                    onClick={() => { setShowModalCreateSubDAO(true) }}>Create subDAO</button>
                <button
                    className="btn btn-primary"
                    onClick={() => { setShowModal(true) }}>Buy BardTokens</button>

            </div>
        </div>
    )
}

export default NavBarHolder