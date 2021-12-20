import { WalletConnectConstants } from '../constants/walletconnect.constants';

export function ConnectWallet(
  state = { authToken: null, isModerator: false, isArtist: false },
  action
) {
  switch (action.type) {
    case WalletConnectConstants.WALLETCONNECTED: {
      return {
        ...state,
        authToken: action.token,
        isModerator: action.isModerator,
        isArtist: action.isArtist,
      };
    }
    case WalletConnectConstants.WALLETDISCONNECTED: {
      return {
        ...state,
        authToken: null,
        isModerator: false,
        isArtist: false,
      };
    }
    default: {
      return state;
    }
  }
}
