import React from 'react'
import { useAccount } from 'wagmi'
import { useBardTokenBalanceOf } from '../src/generated'
import { formatEther } from 'viem'

interface Props {
    address : `0x${string}`
    setAddress : (address : `0x${string}`) => void
    setBardTknBal : (bardTknBal : string) => void
}

import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useBardTokenBalanceOf } from '../src/generated';
import { formatEther } from 'viem';

interface Props {
    address: `0x${string}`;
    setAddress: (address: `0x${string}`) => void;
    setBardTknBal: (bardTknBal: string) => void;
}

const Test = ({ address, setAddress, setBardTknBal }: Props) => {
    const { address: addr } = useAccount();
    const { data } = useBardTokenBalanceOf({
        args: [address as `0x${string}`],
        watch: true,
    });

    useEffect(() => {
        if (data) {
            console.log('Success', data);
            setBardTknBal(formatEther(data as bigint));
        }
    }, [data, setBardTknBal]);

    return (<div>test</div>);
};

export default Test;

