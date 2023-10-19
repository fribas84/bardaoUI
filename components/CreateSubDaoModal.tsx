import React, { MouseEventHandler, useEffect, useState } from 'react'


import { parseEther } from 'viem';

interface Props {
    showModal: boolean,
    setShowModal: (showModal: boolean) => void
}

const CreateSubDaoModal = ({ showModal, setShowModal }: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleClose = (e: any) => {
        e.preventDefault();
        setShowModal(false);
    }
    return (
        <dialog className={showModal ? 'modal modal-bottom sm:modal-middle modal-open' : 'modal modal-bottom sm:modal-middle'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create subDao:</h3>
                <p className="py-4">Current price: 1 BRDT.</p>
               
                {(!isLoading) && <>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">subDAO Name:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">funding Objective:</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="number"
                                min="0"
                                placeholder="enter amount"
                                className="input input-bordered input-primary w-full max-w-xs" />
                            <span className='bg-primary border-primary'>eth</span>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">description:</span>
                        </label>
                        <textarea className="textarea textarea-bordered textarea-primary h-24" placeholder="Bio"></textarea>
                        
                    </div>

                    <div className="flex-auto mt-5">
                        <button className="btn btn-primary mr-4 "

                        > Create </button>
                        <button
                            onClick={handleClose}
                            className="btn btn-secondary">Cancel</button>
                    </div>
                </>}
                {(isLoading) &&
                    <div>
                        <progress className="progress w-56"></progress>
                        <h3 className='font-bold text-lg'> transaction in progress: generation subDAO...</h3>
                        <p>You can validate the transaction in BlockScan {data?.hash}</p>
                    </div>
                }
            </div>
        </dialog>
    )
}

export default CreateSubDaoModal


