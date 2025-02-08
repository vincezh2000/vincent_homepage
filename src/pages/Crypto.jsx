// pages/Crypto.jsx
import React from 'react';

function Crypto() {
  const nfts = [
    {
      image: "/nft1.avif",
      name: "Doodle #9181",
      artist: "Doodles",
    },
    {
      image: "/nft2.avif",
      name: "Doodle #110",
      artist: "Doodles",
    },
    {
      image: "/nft3.avif",
      name: "Azuki #9140",
      artist: "Azuki",
    },
    {
      image: "/nft4.avif",
      name: "Azuki #2000",
      artist: "Azuki",
    },
  ];

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-sincopa text-3xl text-center text-[#A259FF] mb-12 neon-glow">
        Crypto
      </h1>

      <div className="space-y-12">
        {/* Quantitative Trading Section */}
        <section
          className="bg-[#121212] p-8 rounded-lg border border-[#A259FF]/20
                     hover:shadow-[0_0_20px_#A259FF]/20 transition-all duration-500"
        >
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed font-roboto">
              In the fast-moving crypto arena, I focus on quantitative trading
              in the memecoin market, where I develop algorithmic strategies to
              harness social media-driven volatility. By combining statistical,
              sentiment, and machine learning analysis, I pinpoint market
              inefficiencies and capitalize on short-term opportunities—all
              while maintaining a disciplined risk management framework.
            </p>

            {/* Quotation */}
            <blockquote className="border-l-4 border-[#A259FF] pl-4 text-gray-300 italic">
              "I believe meme coin valuation is the digital reflection of social
              consensus, demanding quantitative strategies that balance
              data-driven rigor with community sentiment."
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Whale Tracking */}
              <div
                className="p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#1E1E1E]
                           hover:shadow-[0_0_10px_#A259FF]/20 transition-all duration-300"
              >
                <h3 className="font-sincopa text-[#A259FF] mb-2">Whale Tracking</h3>
                <p className="text-gray-400 text-sm">
                  Real-time monitoring of large holders’ positions and trades,
                  allowing quick identification of market-moving transactions.
                </p>
              </div>

              {/* AI-Driven Insights */}
              <div
                className="p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#1E1E1E]
                           hover:shadow-[0_0_10px_#A259FF]/20 transition-all duration-300"
              >
                <h3 className="font-sincopa text-[#A259FF] mb-2">AI-Driven Insights</h3>
                <p className="text-gray-400 text-sm">
                  Machine learning–powered scanning of sentiment, liquidity, and
                  arbitrage signals across social media, on-chain data, and
                  multiple exchanges.
                </p>
              </div>

              {/* Hedged Arbitrage */}
              <div
                className="p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#1E1E1E]
                           hover:shadow-[0_0_10px_#A259FF]/20 transition-all duration-300"
              >
                <h3 className="font-sincopa text-[#A259FF] mb-2">Hedged Arbitrage</h3>
                <p className="text-gray-400 text-sm">
                  Implementing neutral strategies to exploit pricing
                  discrepancies while systematically controlling risk to preserve
                  capital.
                </p>
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
