# Bridge

BridgeHave tokens on other chains but the grass is greener on Fantom? SpookySwap's bridge supports moving tokens from **Ethereum**, **BSC**, **Arbitrum**, **Avalanche**, and **Polygon** to Fantom and vice versa. Currently Supported Tokens for Bridging to and from Fantom:

* **Ethereum** FTM, USDC, USDT, DAI, wETH, AAVE, BADGER, BAND, COVER, CREAM, CRV, DOLA, FRAX, FXS, GTON, ICE, INV, LINK, MM, SNX, SUSHI, TOMB, wBTC, WOOFY, YFI, BOO
* **Binance Smart Chain** BNB, BIFI, DAI, FTM, MIM, wETH, TOMB, USDC, fUSDT
* **Polygon** DAI, IronICE, USDC, wETH, fUSDT, MAI, TOMB
* **Avalanche** DAI, MIM, USDC, wETH, fUSDT, TOMB, BOO, JOE
* **Arbitrum** MIM, USDC
* **OEC**USDC, fUSDT As the protocol and Fantom chain grows, we'll be adding more tokens to the list to support! Powered by AnySwap.

**Requirements**

* A wallet
* Gas tokens (of the chain you're bridging from, e.g. bridging from Ethereum requires ETH)
* The amount you can bridge must be within the Current Bridgeable Range, which will be shown once the token is selected

​[Have transactions stuck?](https://docs.spookyswap.finance/products/bridge#bridge-faq)​

## How it Works <a href="#how-it-works" id="how-it-works"></a>

Bridging (not to be confused with swapping), is the process of moving a token from one chain to the other. This process requires 2 transactions, depositing the token onto AnySwap, if AnySwap has enough liquidity, then it will transfer the token to your destination chain into your wallet.Because the transactions are done 2 chains, this could take **10min \~ 24 hours depending on the traffic**.During this process, you can check on your deposit transaction hashes for the status. Or [go to the FAQs](https://docs.spookyswap.finance/products/bridge#bridge-faq) if your transactions are taking more than 24 hours.

## How to Bridge <a href="#how-to-bridge" id="how-to-bridge"></a>

​![](https://cdn-images-1.medium.com/max/600/1\*JdQPQ4ulnwh7mw1e5sMRuw.png)​

### 1. Select Networks for Bridge Direction <a href="#1.-select-networks-for-bridge-direction" id="1.-select-networks-for-bridge-direction"></a>

First, select the networks you’d like to bridge to and from. **One of the networks must be Fantom** as the SpookySwap bridge does not support bridging ETH -> BSC or BSC -> ETH. For this example, let's say the direction is A to B chain. In the "From Chain "dropdown, select A, in the "To Chain" dropdown, select B.

### 2. Select Token to Bridge <a href="#2.-select-token-to-bridge" id="2.-select-token-to-bridge"></a>

In the "Token to Bridge" field, select a token that you’d like to bridge.​![](https://cdn-images-1.medium.com/max/600/1\*M5kZZmIutvvElzE2uFJi5Q.png)

### 3. Enter the Amount <a href="#3.-enter-the-amount" id="3.-enter-the-amount"></a>

Check that the amount you've entered is within the minimum and maximum supported by Anyswap. Bridging tokens other than FTM onto the Fantom network will not incur a fee! There will still be a fee for all tokens when transferring off of the Fantom network.​![](https://cdn-images-1.medium.com/max/600/1\*Uq4LlKKcnlzBI2TrhC6XcQ.png)​

### 4. Click “Bridge Token” <a href="#4.-click-bridge-token" id="4.-click-bridge-token"></a>

Metamask will ask you to confirm your action. There will be **2 transactions for you to confirm, one going out from A chain, one accepting into B chain.** The received amount will automatically deduct the price of the fee.**NOTE: You will receive the same token you bridged!**

### 5. View Your Bridged Token <a href="#5.-view-your-bridged-token" id="5.-view-your-bridged-token"></a>

Check your transactions activity history on FTMscan to see if it arrived. To view the token you've just bridged over on your wallet, **connect your wallet to Fantom Opera**, and **add the ability to display** the token that you bridged:

1. 1.Go to Swap
2. 2.Click on a token button to summon the token selection list
3. 3.Find the token you've just bridged, or import it with its address on Fantom Opera
4. 4.Click on the "+" to add to your wallet display​

![](https://docs.spookyswap.finance/\~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MXi8tZ-Fm6oya\_e72FM-887967055%2Fuploads%2FbL6Kc1USc6pXGNovL9SV%2FAdd\_BNB.png?alt=media\&token=672ea86d-64ec-4201-a5cb-40adaff3f698)If your bridge transactions are stuck, you can check the Bridge FAQs.

### 6. After Bridging to Fantom? <a href="#6.-after-bridging-to-fantom" id="6.-after-bridging-to-fantom"></a>

You've check that your lovely tokens have successfully crossed the bridge on FTMscan or AnySwap Tools, yes! Welcome to Fantom Opera. What now? If you were looking forward to trade some tokens, farm on rich soil, just like any other chain, **you'd need some FTM for gas to perform transactions.** Luckily you can get some free gas from the SpookySwap Discord.[How to Get Free Fantom Gas](https://docs.spookyswap.finance/getting-started/how-to-get-fantom-gas)​

## Bridging ETH <a href="#bridging-eth" id="bridging-eth"></a>

​![](https://cdn-images-1.medium.com/max/600/1\*Do26dCbPHQG0wzrbJzvieg.png)​

1. 1.A link in the description reminds you to wrap Ethereum. **Native Ethereum must be wrapped to be brought off the Ethereum mainnet**.

​![](https://cdn-images-1.medium.com/max/600/1\*jQX1NYwF-9X8nqruHTMcTg.png)​2. **Enter the amount of ETH to wrap** in our popup modal, and then click the “Wrap” button.3. **Confirm** the wrapping transaction in your MetaMask popup, you will be able to bridge your wETH.​

## Bridge FAQ <a href="#bridge-faq" id="bridge-faq"></a>

**My transactions are taking a long time...** If your bridge is taking less than 4 hours, just be patient it will likely arrive soon. If your transaction takes longer than 4 hours, you may need to force the transaction through using the [Anyswap](https://medium.com/u/b393e603da6d) [Explorer Tools](https://anyswap.net/explorer). There could be many reasons why the bridge is not going through, but you can try: 1. Go to [https://anyswap.net/explorer](https://anyswap.net/explorer) 2. Click the Tools tab 3. Fill in the details of your attempted bridge and click "send" 4. This should automatically push your transaction through**Bridge gave you anyXXX tokens?** This means that there was not enough liquidity when AnySwap got to your bridge request. When bridging to and from **Avalanche, Polygon and Arbitrum**, there needs to be an equal amount of the tokens you are bridging on the receiving chain. For example, if you are bridging 500 USDC from Avalanche to Fantom, there needs to be 500 USDC in the Fantom Bridge. If there is not, the it **will not let you bridge.** However, in some occasions, bridges will slip through and give you anyXXX tokens, which you can **convert into regular XXX tokens on a chain you choose by:**

1. 1.Go to the Pool [https://anyswap.exchange/#/pool](https://anyswap.exchange/#/pool)​
2. 2.Click Remove
3. 3.Choose a chain which has got liquidity - including the same destination chain if liquidity has increased enough
4. 4.You will receive the new XXX token on the chain you chose

**Initial Bridge Transaction is pending forever?** First, check if the status is "pending" in the recent activities history on your MetaMask. If so, and your request for depositing has been pending for more than 1hour, this may be happening because the gas setting is too low.You can speed up this step of the process by rewriting your old transaction with a new one with higher gas by [following these steps](https://docs.spookyswap.finance/getting-started/faq#how-do-i-fix-pending-transactions-on-metamask).**My tokens were sent to an 0x00000... address?** This is normal for bridging from some chains. It means that the source-chain version of the token is being burned, the bridge will remake the destination-chain version of the token next.

Additional Help can be found at Anyswap's zendesk at:​[https://anyswaphelp.zendesk.com/hc/en-us](https://anyswaphelp.zendesk.com/hc/en-us)​**​**
