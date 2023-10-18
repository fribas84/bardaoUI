import { defineConfig } from '@wagmi/cli';
import { hardhat, react } from '@wagmi/cli/plugins';
import {ABI as BarDexABI} from './contracts/BarDex';
import {ABI as BardTokenABI} from './contracts/BardToken';

import { mainnet, sepolia } from 'wagmi/chains';

export default defineConfig({
    out: 'src/generated.ts',
    contracts: [
        {
            name: 'BarDex',
            address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
            abi: BarDexABI
        },
        {
            name: 'BardToken',
            address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
            abi: BardTokenABI
        }
    ],
    plugins: [
        react(),
    ],
})
