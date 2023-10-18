
import Footer from './Footer';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>BarDAO</title>
                <meta
                    content="a platform as a service community builder powered by blockchain"
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <main>
                <div className='m-10'>
                
                <Navbar />
                <div className='my-5'>
                    {children}
                </div>

                <Footer />
                </div>
            </main >
        </>
    );
}