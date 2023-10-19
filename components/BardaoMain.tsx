import React, { useState } from 'react'
import { useAccount } from 'wagmi';
import BuyTokensModal from './BuyTokensModal';
import NavBarHolder from './NavBarHolder';
import { useBardTokenBalanceOf } from '../src/generated';
import { formatEther } from 'viem';
import CreateSubDaoModal from './CreateSubDaoModal';

type Props = {}

const BardaoMain = (props: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalCreateSubDAO, setShowModalCreateSubDAO] = useState<boolean>(false);
    const [bardTknBal, setBardTknBal] = useState<string>("0");
    const { isConnected, address } = useAccount();

    const { data } = useBardTokenBalanceOf({
        args: [address as `0x${string}`],
        watch: true,
    });

    return (<>
        {(data === 0n) &&
            <div className='mx-auto my-10 justify-center flex '>
                <div className='p-10 card w-96 bg-base-100 shadow-xl justify-center'>
                    <div className="card-body">
                        <h2 className="card-title">Insufficient funds</h2>
                        <p> Your current BRDT balance is 0, in order to create a subDAO you need to adquire BarDAO Tokens</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button
                            onClick={() => { setShowModal(true) }}
                            className="btn btn-primary">Buy BardTokens</button>
                    </div>
                </div>
            </div>
        }
        {(data !== 0n) &&
            <NavBarHolder
                showModal={showModal}
                setShowModal={setShowModal}
                showModalCreateSubDAO={showModalCreateSubDAO}
                setShowModalCreateSubDAO={setShowModalCreateSubDAO}
                bardTknBal={ data !== undefined? formatEther(data?.toString()): '0'} />
        }
        <BuyTokensModal showModal={showModal} setShowModal={setShowModal} />
        <CreateSubDaoModal showModal={showModalCreateSubDAO} setShowModal={setShowModalCreateSubDAO} />
    </>
    )
}

export default BardaoMain