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
import NavBarHolder from '../../components/NavBarHolder';
import Test from '../../components/test';
import BardaoMain from '../../components/BardaoMain';




const Home: NextPage = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [bardTknBal, setBardTknBal] = useState<string>("0");
    const {isConnected, address } = useAccount();
 

    
    return (
        <Layout>    
            {(!isConnected) &&
                <div className='my-28'>
                    <h1 className='text-2xl text-center'>Connect to start building!</h1>
                </div>
            }
            {isConnected && 
                <BardaoMain /> }
        </Layout>
    );
};

export default Home;
