import React, { MouseEventHandler, useState } from 'react'

interface Props {
    showModal: boolean,
    setShowModal: (showModal: boolean) => void

}

const BuyTokensModal = ({ showModal, setShowModal }: Props) => {
    console.log("inside modal", showModal);
    const [transactionHash, setTransactionHash] = useState<string>('');
    const [value, setValue] = useState<string>('0');

    const handleClose = (e:any) => {
        e.preventDefault();
        setValue('0');
        setShowModal(false);
    }
    
    return (
        <dialog className={showModal ? 'modal modal-bottom sm:modal-middle modal-open': 'modal modal-bottom sm:modal-middle'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Buy BardToken</h3>
                <p className="py-4">Current price: 1 eth = 1 BRDT.</p>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Amount of BRDT to buy?</span>
                    </label>
                    <input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="number" min="0" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="flex-auto mt-5">
                    
                        <button className="btn btn-primary mr-4 ">Buy</button>
                        <button disabled={transactionHash ? true : false} onClick={handleClose} className="btn btn-secondary">Cancel</button>

                    
                </div>
            </div>
        </dialog>
    )
}

export default BuyTokensModal


