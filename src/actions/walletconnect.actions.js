import { WalletConnectConstants } from '../constants/walletconnect.constants';

const WalletConnectActions = {
  connectWallet,
  disconnectWallet,
};

function connectWallet(authToken, isModerator, isArtist) {
  return dispatch => {
    dispatch(_connectWallet(authToken, isModerator, isArtist));
  };
}

const _connectWallet = (authToken, isModerator, isArtist) => {
  return {
    type: WalletConnectConstants.WALLETCONNECTED,
    token: authToken,
    isModerator,
    isArtist,
  };
};

function disconnectWallet() {
  return dispatch => {
    dispatch(_disconnectWallet());
  };
}

const _disconnectWallet = () => {
  return {
    type: WalletConnectConstants.WALLETDISCONNECTED,
  };
};

export default WalletConnectActions;
