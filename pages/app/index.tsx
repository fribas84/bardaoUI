import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic'

import Navbar from '../../components/Navbar';
import { useAccount } from 'wagmi';
import Footer from '../../components/Footer';
import { useBardTokenBalanceOf, bardTokenAddress } from '../../src/generated'
import { useEffect, useState } from 'react';
import BuyTokensModal from '../../components/BuyTokensModal';
import Layout from '../../components/Layout';
import BardaoMain from '../../components/BardaoMain';
import ClientOnly from './clientOnly';

const Home: NextPage = () => {

    const { isConnected } = useAccount();

    return (
        <Layout>
            <ClientOnly> 
            {(!isConnected) &&
                <div className='my-28'>
                    <h1 className='text-2xl text-center'>Connect to start building!</h1>
                </div>
            }
            {isConnected &&

                <BardaoMain />}
                </ClientOnly>
        </Layout>
    );
};

export default Home;
