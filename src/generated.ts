import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import { ReadContractResult, WriteContractMode, PrepareWriteContractResult } from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BarDex
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const barDexABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_BardToken', internalType: 'address', type: 'address' }],
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'BardToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'function', inputs: [], name: 'swap', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'widthdraw',
    outputs: [],
  },
] as const

export const barDexAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512' as const

export const barDexConfig = { address: barDexAddress, abi: barDexABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BardToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const bardTokenABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Minted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'previousAdminRole', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'newAdminRole', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'account', internalType: 'address', type: 'address', indexed: true },
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'account', internalType: 'address', type: 'address', indexed: true },
      { name: 'sender', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MAX_SUPPLY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_minter', internalType: 'address', type: 'address' }],
    name: 'grantMinterRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

export const bardTokenAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3' as const

export const bardTokenConfig = { address: bardTokenAddress, abi: bardTokenABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link barDexABI}__.
 */
export function useBarDexRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof barDexABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof barDexABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractRead({
    abi: barDexABI,
    address: barDexAddress,
    ...config,
  } as UseContractReadConfig<typeof barDexABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link barDexABI}__ and `functionName` set to `"BardToken"`.
 */
export function useBarDexBardToken<
  TFunctionName extends 'BardToken',
  TSelectData = ReadContractResult<typeof barDexABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof barDexABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: barDexABI,
    address: barDexAddress,
    functionName: 'BardToken',
    ...config,
  } as UseContractReadConfig<typeof barDexABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link barDexABI}__ and `functionName` set to `"owner"`.
 */
export function useBarDexOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof barDexABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof barDexABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: barDexABI,
    address: barDexAddress,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof barDexABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link barDexABI}__.
 */
export function useBarDexWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof barDexABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof barDexABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof barDexABI, TFunctionName, TMode>({
    abi: barDexABI,
    address: barDexAddress,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link barDexABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useBarDexRenounceOwnership<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof barDexABI, 'renounceOwnership'>['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof barDexABI, 'renounceOwnership', TMode> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof barDexABI, 'renounceOwnership', TMode>({
    abi: barDexABI,
    address: barDexAddress,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link barDexABI}__ and `functionName` set to `"swap"`.
 */
export function useBarDexSwap<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof barDexABI, 'swap'>['request']['abi'],
        'swap',
        TMode
      > & { functionName?: 'swap' }
    : UseContractWriteConfig<typeof barDexABI, 'swap', TMode> & {
        abi?: never
        functionName?: 'swap'
      } = {} as any,
) {
  return useContractWrite<typeof barDexABI, 'swap', TMode>({
    abi: barDexABI,
    address: barDexAddress,
    functionName: 'swap',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link barDexABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useBarDexTransferOwnership<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof barDexABI, 'transferOwnership'>['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof barDexABI, 'transferOwnership', TMode> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof barDexABI, 'transferOwnership', TMode>({
    abi: barDexABI,
    address: barDexAddress,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link barDexABI}__ and `functionName` set to `"widthdraw"`.
 */
export function useBarDexWidthdraw<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof barDexABI, 'widthdraw'>['request']['abi'],
        'widthdraw',
        TMode
      > & { functionName?: 'widthdraw' }
    : UseContractWriteConfig<typeof barDexABI, 'widthdraw', TMode> & {
        abi?: never
        functionName?: 'widthdraw'
      } = {} as any,
) {
  return useContractWrite<typeof barDexABI, 'widthdraw', TMode>({
    abi: barDexABI,
    address: barDexAddress,
    functionName: 'widthdraw',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link barDexABI}__.
 */
export function usePrepareBarDexWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof barDexABI, TFunctionName>,
    'abi' | 'address'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: barDexABI,
    address: barDexAddress,
    ...config,
  } as UsePrepareContractWriteConfig<typeof barDexABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link barDexABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareBarDexRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof barDexABI, 'renounceOwnership'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: barDexABI,
    address: barDexAddress,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof barDexABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link barDexABI}__ and `functionName` set to `"swap"`.
 */
export function usePrepareBarDexSwap(
  config: Omit<
    UsePrepareContractWriteConfig<typeof barDexABI, 'swap'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: barDexABI,
    address: barDexAddress,
    functionName: 'swap',
    ...config,
  } as UsePrepareContractWriteConfig<typeof barDexABI, 'swap'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link barDexABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareBarDexTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof barDexABI, 'transferOwnership'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: barDexABI,
    address: barDexAddress,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof barDexABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link barDexABI}__ and `functionName` set to `"widthdraw"`.
 */
export function usePrepareBarDexWidthdraw(
  config: Omit<
    UsePrepareContractWriteConfig<typeof barDexABI, 'widthdraw'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: barDexABI,
    address: barDexAddress,
    functionName: 'widthdraw',
    ...config,
  } as UsePrepareContractWriteConfig<typeof barDexABI, 'widthdraw'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link barDexABI}__.
 */
export function useBarDexEvent<TEventName extends string>(
  config: Omit<UseContractEventConfig<typeof barDexABI, TEventName>, 'abi' | 'address'> = {} as any,
) {
  return useContractEvent({
    abi: barDexABI,
    address: barDexAddress,
    ...config,
  } as UseContractEventConfig<typeof barDexABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link barDexABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useBarDexOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof barDexABI, 'OwnershipTransferred'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: barDexABI,
    address: barDexAddress,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof barDexABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__.
 */
export function useBardTokenRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`.
 */
export function useBardTokenDefaultAdminRole<
  TFunctionName extends 'DEFAULT_ADMIN_ROLE',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"DOMAIN_SEPARATOR"`.
 */
export function useBardTokenDomainSeparator<
  TFunctionName extends 'DOMAIN_SEPARATOR',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'DOMAIN_SEPARATOR',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"MAX_SUPPLY"`.
 */
export function useBardTokenMaxSupply<
  TFunctionName extends 'MAX_SUPPLY',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'MAX_SUPPLY',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"MINTER_ROLE"`.
 */
export function useBardTokenMinterRole<
  TFunctionName extends 'MINTER_ROLE',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'MINTER_ROLE',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"allowance"`.
 */
export function useBardTokenAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useBardTokenBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"decimals"`.
 */
export function useBardTokenDecimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"eip712Domain"`.
 */
export function useBardTokenEip712Domain<
  TFunctionName extends 'eip712Domain',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'eip712Domain',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"getRoleAdmin"`.
 */
export function useBardTokenGetRoleAdmin<
  TFunctionName extends 'getRoleAdmin',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'getRoleAdmin',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"hasRole"`.
 */
export function useBardTokenHasRole<
  TFunctionName extends 'hasRole',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'hasRole',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"name"`.
 */
export function useBardTokenName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"nonces"`.
 */
export function useBardTokenNonces<
  TFunctionName extends 'nonces',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'nonces',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useBardTokenSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"symbol"`.
 */
export function useBardTokenSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useBardTokenTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof bardTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof bardTokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link bardTokenABI}__.
 */
export function useBardTokenWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof bardTokenABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof bardTokenABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof bardTokenABI, TFunctionName, TMode>({
    abi: bardTokenABI,
    address: bardTokenAddress,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"approve"`.
 */
export function useBardTokenApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof bardTokenABI, 'approve'>['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof bardTokenABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof bardTokenABI, 'approve', TMode>({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"grantMinterRole"`.
 */
export function useBardTokenGrantMinterRole<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof bardTokenABI, 'grantMinterRole'>['request']['abi'],
        'grantMinterRole',
        TMode
      > & { functionName?: 'grantMinterRole' }
    : UseContractWriteConfig<typeof bardTokenABI, 'grantMinterRole', TMode> & {
        abi?: never
        functionName?: 'grantMinterRole'
      } = {} as any,
) {
  return useContractWrite<typeof bardTokenABI, 'grantMinterRole', TMode>({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'grantMinterRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"grantRole"`.
 */
export function useBardTokenGrantRole<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof bardTokenABI, 'grantRole'>['request']['abi'],
        'grantRole',
        TMode
      > & { functionName?: 'grantRole' }
    : UseContractWriteConfig<typeof bardTokenABI, 'grantRole', TMode> & {
        abi?: never
        functionName?: 'grantRole'
      } = {} as any,
) {
  return useContractWrite<typeof bardTokenABI, 'grantRole', TMode>({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'grantRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"mint"`.
 */
export function useBardTokenMint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof bardTokenABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof bardTokenABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof bardTokenABI, 'mint', TMode>({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"permit"`.
 */
export function useBardTokenPermit<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof bardTokenABI, 'permit'>['request']['abi'],
        'permit',
        TMode
      > & { functionName?: 'permit' }
    : UseContractWriteConfig<typeof bardTokenABI, 'permit', TMode> & {
        abi?: never
        functionName?: 'permit'
      } = {} as any,
) {
  return useContractWrite<typeof bardTokenABI, 'permit', TMode>({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'permit',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"renounceRole"`.
 */
export function useBardTokenRenounceRole<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof bardTokenABI, 'renounceRole'>['request']['abi'],
        'renounceRole',
        TMode
      > & { functionName?: 'renounceRole' }
    : UseContractWriteConfig<typeof bardTokenABI, 'renounceRole', TMode> & {
        abi?: never
        functionName?: 'renounceRole'
      } = {} as any,
) {
  return useContractWrite<typeof bardTokenABI, 'renounceRole', TMode>({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'renounceRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"revokeRole"`.
 */
export function useBardTokenRevokeRole<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof bardTokenABI, 'revokeRole'>['request']['abi'],
        'revokeRole',
        TMode
      > & { functionName?: 'revokeRole' }
    : UseContractWriteConfig<typeof bardTokenABI, 'revokeRole', TMode> & {
        abi?: never
        functionName?: 'revokeRole'
      } = {} as any,
) {
  return useContractWrite<typeof bardTokenABI, 'revokeRole', TMode>({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'revokeRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"transfer"`.
 */
export function useBardTokenTransfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof bardTokenABI, 'transfer'>['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof bardTokenABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof bardTokenABI, 'transfer', TMode>({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useBardTokenTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof bardTokenABI, 'transferFrom'>['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof bardTokenABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof bardTokenABI, 'transferFrom', TMode>({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link bardTokenABI}__.
 */
export function usePrepareBardTokenWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof bardTokenABI, TFunctionName>,
    'abi' | 'address'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: bardTokenABI,
    address: bardTokenAddress,
    ...config,
  } as UsePrepareContractWriteConfig<typeof bardTokenABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareBardTokenApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof bardTokenABI, 'approve'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof bardTokenABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"grantMinterRole"`.
 */
export function usePrepareBardTokenGrantMinterRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof bardTokenABI, 'grantMinterRole'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'grantMinterRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof bardTokenABI, 'grantMinterRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"grantRole"`.
 */
export function usePrepareBardTokenGrantRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof bardTokenABI, 'grantRole'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'grantRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof bardTokenABI, 'grantRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareBardTokenMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof bardTokenABI, 'mint'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof bardTokenABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"permit"`.
 */
export function usePrepareBardTokenPermit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof bardTokenABI, 'permit'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'permit',
    ...config,
  } as UsePrepareContractWriteConfig<typeof bardTokenABI, 'permit'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"renounceRole"`.
 */
export function usePrepareBardTokenRenounceRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof bardTokenABI, 'renounceRole'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'renounceRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof bardTokenABI, 'renounceRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"revokeRole"`.
 */
export function usePrepareBardTokenRevokeRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof bardTokenABI, 'revokeRole'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'revokeRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof bardTokenABI, 'revokeRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareBardTokenTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof bardTokenABI, 'transfer'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof bardTokenABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link bardTokenABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareBardTokenTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof bardTokenABI, 'transferFrom'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: bardTokenABI,
    address: bardTokenAddress,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof bardTokenABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link bardTokenABI}__.
 */
export function useBardTokenEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof bardTokenABI, TEventName>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractEvent({
    abi: bardTokenABI,
    address: bardTokenAddress,
    ...config,
  } as UseContractEventConfig<typeof bardTokenABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link bardTokenABI}__ and `eventName` set to `"Approval"`.
 */
export function useBardTokenApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof bardTokenABI, 'Approval'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: bardTokenABI,
    address: bardTokenAddress,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof bardTokenABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link bardTokenABI}__ and `eventName` set to `"EIP712DomainChanged"`.
 */
export function useBardTokenEip712DomainChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof bardTokenABI, 'EIP712DomainChanged'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: bardTokenABI,
    address: bardTokenAddress,
    eventName: 'EIP712DomainChanged',
    ...config,
  } as UseContractEventConfig<typeof bardTokenABI, 'EIP712DomainChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link bardTokenABI}__ and `eventName` set to `"Minted"`.
 */
export function useBardTokenMintedEvent(
  config: Omit<
    UseContractEventConfig<typeof bardTokenABI, 'Minted'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: bardTokenABI,
    address: bardTokenAddress,
    eventName: 'Minted',
    ...config,
  } as UseContractEventConfig<typeof bardTokenABI, 'Minted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link bardTokenABI}__ and `eventName` set to `"RoleAdminChanged"`.
 */
export function useBardTokenRoleAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof bardTokenABI, 'RoleAdminChanged'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: bardTokenABI,
    address: bardTokenAddress,
    eventName: 'RoleAdminChanged',
    ...config,
  } as UseContractEventConfig<typeof bardTokenABI, 'RoleAdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link bardTokenABI}__ and `eventName` set to `"RoleGranted"`.
 */
export function useBardTokenRoleGrantedEvent(
  config: Omit<
    UseContractEventConfig<typeof bardTokenABI, 'RoleGranted'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: bardTokenABI,
    address: bardTokenAddress,
    eventName: 'RoleGranted',
    ...config,
  } as UseContractEventConfig<typeof bardTokenABI, 'RoleGranted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link bardTokenABI}__ and `eventName` set to `"RoleRevoked"`.
 */
export function useBardTokenRoleRevokedEvent(
  config: Omit<
    UseContractEventConfig<typeof bardTokenABI, 'RoleRevoked'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: bardTokenABI,
    address: bardTokenAddress,
    eventName: 'RoleRevoked',
    ...config,
  } as UseContractEventConfig<typeof bardTokenABI, 'RoleRevoked'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link bardTokenABI}__ and `eventName` set to `"Transfer"`.
 */
export function useBardTokenTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof bardTokenABI, 'Transfer'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: bardTokenABI,
    address: bardTokenAddress,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof bardTokenABI, 'Transfer'>)
}
