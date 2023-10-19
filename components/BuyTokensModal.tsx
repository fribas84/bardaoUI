import React, { MouseEventHandler, useEffect, useState } from 'react'


import { useBarDexSwap } from '../src/generated';
import { parseEther } from 'viem';

interface Props {
    showModal: boolean,
    setShowModal: (showModal: boolean) => void
}

const BuyTokensModal = ({ showModal, setShowModal }: Props) => {

    const [value, setValue] = useState<string>('0');
    const { data, isLoading, isSuccess, isError, write } = useBarDexSwap({
        value: parseEther(value)
    });

    useEffect(() => {
        if (isSuccess) {
            setValue('0')
            setShowModal(false);
        }
    }, [isSuccess, setShowModal])

    const handleClose = (e: any) => {
        e.preventDefault();
        setValue('0');
        setShowModal(false);
    }

    const handleBuy = async (e: any) => {
        e.preventDefault();
        await write();
    }

    return (
        <dialog className={showModal ? 'modal modal-bottom sm:modal-middle modal-open' : 'modal modal-bottom sm:modal-middle'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Buy BardToken</h3>
                <p className="py-4">Current price: 1 eth = 1 BRDT.</p>
                {(!isLoading) && <>
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
                        <button className="btn btn-primary mr-4 "
                            onClick={handleBuy}
                        > Buy </button>
                        <button
                            onClick={handleClose}
                            className="btn btn-secondary">Cancel</button>
                    </div>
                </>}
                {(isLoading) &&
                    <div>
                        <progress className="progress w-56"></progress>
                        <h3 className='font-bold text-lg'> transaction in progress to buy {value} BRDT...</h3>
                        <p>You can validate the transaction in BlockScan {data?.hash}</p>
                    </div>
                }
            </div>
        </dialog>
    )
}

export default BuyTokensModal


