// pages/Crypto.jsx
import React from 'react';

function Crypto() {
  const nfts = [
    {
      image: "/nft1.avif",
      name: "Doodle #9181",
      artist: "Larva Labs"
    },
    {
      image: "/nft2.avif",
      name: "Bored Ape #110",
      artist: "BAYC"
    },
    {
      image: "/nft3.avif",
      name: "Azuki #9140",
      artist: "Doodles"
    },
    {
      image: "/nft4.avif",
      name: "Azuki #2000",
      artist: "Azuki"
    }
  ];

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-sincopa text-3xl text-center text-[#A259FF] mb-12 neon-glow">
        Crypto
      </h1>

      <div className="space-y-12">
        {/* Quantitative Trading Focus */}
        <section className="bg-[#121212] p-8 rounded-lg border border-[#A259FF]/20
                          hover:shadow-[0_0_20px_#A259FF]/20 transition-all duration-500">
          {/* <h2 className="font-sincopa text-2xl text-[#A259FF] mb-6 neon-glow">
            Quantitative Trading
          </h2> */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed font-roboto">
              My primary focus in the crypto space is quantitative trading,
              particularly in the dynamic memecoin market. I specialize in developing
              sophisticated algorithmic trading strategies that capitalize on the unique
              characteristics of memecoins, including their high volatility and social
              media-driven nature. By combining statistical analysis, sentiment analysis,
              and machine learning algorithms, I identify market inefficiencies and
              capitalize on trading opportunities while maintaining robust risk management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#1E1E1E] hover:shadow-[0_0_10px_#A259FF]/20 transition-all duration-300">
                <h3 className="font-sincopa text-[#A259FF] mb-2">Market Analysis</h3>
                <p className="text-gray-400 text-sm">Real-time analysis of memecoin market sentiment, social media trends, and on-chain metrics</p>
              </div>
              <div className="p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#1E1E1E] hover:shadow-[0_0_10px_#A259FF]/20 transition-all duration-300">
                <h3 className="font-sincopa text-[#A259FF] mb-2">Algorithm Development</h3>
                <p className="text-gray-400 text-sm">High-frequency trading algorithms optimized for memecoin volatility and liquidity patterns</p>
              </div>
              <div className="p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#1E1E1E] hover:shadow-[0_0_10px_#A259FF]/20 transition-all duration-300">
                <h3 className="font-sincopa text-[#A259FF] mb-2">Risk Management</h3>
                <p className="text-gray-400 text-sm">Dynamic risk models with real-time adjustment for meme-driven market movements</p>
              </div>
            </div>
          </div>
        </section>

        {/* NFT Collection */}
        <section className="space-y-6">
          <h2 className="font-sincopa text-2xl text-[#A259FF] mb-6 neon-glow">
            NFT Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nfts.map((nft, index) => (
              <div
                key={index}
                className="bg-[#121212] rounded-lg overflow-hidden
                         border border-[#A259FF]/20 hover:shadow-[0_0_20px_#A259FF]/20
                         transition-all duration-500"
              >
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h3 className="font-sincopa text-sm text-[#A259FF]">
                    {nft.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{nft.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Crypto;