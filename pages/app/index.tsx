import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../../components/Navbar';
import { useAccount } from 'wagmi';
import Footer from '../../components/Footer';
import { useBardTokenBalanceOf, bardTokenAddress } from '../../src/generated'
import { useEffect, useState } from 'react';
import BuyTokensModal from '../../components/BuyTokensModal';
import Layout from '../../components/Layout';
import { formatEther, parseEther } from 'viem';




const Home: NextPage = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [bardTknBal, setBardTknBal] = useState<string>("");
    const { address, isConnected } = useAccount();
    const { data } = useBardTokenBalanceOf({
        args: [address as `0x${string}`],
        watch: true
    });

    useEffect(() => {
        setBardTknBal(formatEther(data as bigint));
    }, [data])

    if (!bardTknBal) return null;
    return (
        <Layout>
            {!isConnected &&
                <div className='my-28'>
                    <h1 className='text-2xl text-center'>Connect to start building!</h1>
                </div>
            }

            {(bardTknBal === '0') &&
                <div className='mx-auto my-10 justify-center flex '>
                    <div className='p-10 card w-96 bg-base-100 shadow-xl justify-center'>


                        <div className="card-body">
                            <h2 className="card-title">Insufficient funds</h2>
                            <p> Your current BRDT balance is 0, in order to create a subDAO you need to adquire BarDAO Tokens</p>
                        </div>
                        <div className="card-actions justify-center">
                            <button onClick={() => {
                                setShowModal(true);
                            }
                            }
                                className="btn btn-primary">Buy BardTokens</button>

                        </div>


                    </div>

                </div>
            }
            {(bardTknBal != "0") &&

                <>

                    <div className="navbar bg-neutral text-neutral-content rounded-xl">
                        <h1 className="btn btn-ghost normal-case text-l navbar-start">Current BardToken Balance: {bardTknBal}</h1>
                        <div className='navbar-end mr-2'>
                            <button onClick={() => {
                                console.log(showModal);
                                setShowModal(true);
                            }
                            }
                                className="btn btn-primary">Buy BardTokens</button>
                        </div>
                    </div>

                </>
            }

            <BuyTokensModal showModal={showModal} setShowModal={setShowModal} />
        </Layout>
    );
};

export default Home;
