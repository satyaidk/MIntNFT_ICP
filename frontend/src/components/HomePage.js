import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import background image
import backgroundImage from './nftbg.png';

// Import NFT images
import nft1 from './nft1.png';
import nft2 from './nft2.png';
import nft3 from './nft3.png';
import nft4 from './nft4.png';
import nft5 from './nft5.png';
import nft6 from './nft6.png';
import nft7 from './nft7.png';
import nft8 from './nft8.png';
import nft9 from './nft9.png';
import nft10 from './nft10.png';
import nft11 from './nft11.png';
import nft12 from './nft12.png';
import nft13 from './nft13.png';
import nft14 from './nft14.png';
import nft15 from './nft15.png';
import nft16 from './nft16.png';
import nft17 from './nft17.png';
import nft18 from './nft18.png';
import nft19 from './nft19.png';

function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const containerWidth = container.offsetWidth;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth - containerWidth) {
        scrollPosition = 0;
      }
      container.scrollTo(scrollPosition, 0);
    };

    const scrollInterval = setInterval(scroll, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(128,0,128,0.7)), url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundAttachment: 'fixed', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center' 
    }}>
      {/* Navbar */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        padding: '10px 20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'black', 
        color: 'white' ,
        zIndex: 9999
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>MyNFT Marketplace</div>
        <nav>
          <ul style={{ listStyleType: 'none', display: 'flex' }}>
            <li style={{ marginRight: '20px' }}><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></li>
            <li style={{ marginRight: '20px' }}><Link to="/mint" style={{ textDecoration: 'none', color: 'white' }}>Mint NFT</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '100px 20px', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        {/* Hero section */}
        <section style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Discover and Collect Unique NFTs</h1>
          <p style={{ fontSize: '18px', marginBottom: '40px' }}>Explore a world of digital art, collectibles, and experiences.</p>
          <Link to="/mint" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Start Minting</Link>
        </section>

        {/* Featured NFTs section */}
        <section style={{ marginBottom: '60px', background: 'rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '10px', overflow: 'hidden' }}>
          <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Featured NFTs</h2>
          <div ref={containerRef} style={{ display: 'flex', overflow: 'hidden' }}>
            <img src={nft1} alt="NFT 1" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft2} alt="NFT 2" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft3} alt="NFT 3" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft4} alt="NFT 4" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft5} alt="NFT 5" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft6} alt="NFT 6" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft7} alt="NFT 7" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft8} alt="NFT 8" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft9} alt="NFT 9" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft10} alt="NFT 10" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft11} alt="NFT 11" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft12} alt="NFT 12" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft13} alt="NFT 13" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft14} alt="NFT 14" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft15} alt="NFT 15" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft16} alt="NFT 16" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft17} alt="NFT 17" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft18} alt="NFT 18" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
            <img src={nft19} alt="NFT 19" className="scrolling-image" style={{ width: '200px', height: '200px' }} />
          </div>
        </section>

        {/* About section */}
        <section style={{ marginBottom: '60px', background: 'rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '10px' }}>
          <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>About MyNFT Marketplace</h2>
          <p>MyNFT Marketplace is a decentralized platform where creators can mint, sell, and collect NFTs. Explore our diverse collection of digital assets and join the NFT revolution today!</p>
        </section>
      </div>

      {/* Footer section */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '20px', 
        color: 'white', 
        backgroundColor: 'black' 
      }}>
        <p>&copy; 2024 MyNFT Marketplace. All rights reserved.</p>
      </footer>

      {/* CSS for scrolling animation */}
      <style>{`
        .scrolling-image {
          margin-right: 20px;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
