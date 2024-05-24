
let nfts = [];

function mintNFT(name, description, image) {
    const nft = {
        name: name,
        description: description,
        image: image
    };
    nfts.push(nft);
}

function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`Description: ${nft.description}`);
        console.log(`Image: ${nft.image}`);
    });
}

function getTotalSupply() {
    return nfts.length;
}

mintNFT("CryptoKitty", "A cute crypto kitty", "kitty.png");
mintNFT("CryptoPunk", "A rare punk", "punk.png");

console.log("Listing all NFTs:");
listNFTs();

console.log("Total Supply of NFTs:", getTotalSupply());
