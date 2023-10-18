import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../../components/Navbar';
import { useAccount } from 'wagmi';
import Footer from '../../components/Footer';
import { useBardTokenBalanceOf } from '../../src/generated'
import { useState } from 'react';
import BuyTokensModal from '../../components/BuyTokensModal';
import Layout from '../../components/Layout';

const tokenAddress: `0x${string}` = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const Home: NextPage = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const { address, isConnected } = useAccount();
    const { data } = useBardTokenBalanceOf({
        args: [address as `0x${string}`],
    });


    return (
        <Layout>
            {!isConnected &&
                <div className='my-28'>
                    <h1 className='text-2xl text-center'>Connect to start building!</h1>
                </div>
            }

            {(data === 0n) &&
                <div className='mx-auto my-10 justify-center flex '>
                    <div className='p-10 card w-96 bg-base-100 shadow-xl justify-center'>


                        <div className="card-body">
                            <h2 className="card-title">Insufficient funds</h2>
                            <p> Your current BRDT balance is 0, in order to create a subDAO you need to adquire BarDAO Tokens</p>
                        </div>
                        <div className="card-actions justify-center">
                            <button onClick={() => 
                            {   console.log(showModal);
                                setShowModal(true);}
                        }
                                className="btn btn-primary">Buy BardTokens</button>
                                <BuyTokensModal showModal={showModal} setShowModal={setShowModal} />
                        </div>

                        
                    </div>

                </div>
            }

        </Layout>
    );
};

export default Home;
