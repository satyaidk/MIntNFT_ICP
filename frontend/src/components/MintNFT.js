import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import background image
import mintBackground from './mintbgg.png';

function MintNFT() {
  // State variables to store form data and image preview URL
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [collectionName, setCollectionName] = useState('');
  const [supply, setSupply] = useState(1);
  const [externalLink, setExternalLink] = useState('');
  const [traits, setTraits] = useState([]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform NFT minting logic here (e.g., interact with backend)
    console.log('Form submitted:', { name, description, image,  collectionName, supply, externalLink, traits });
    // Reset form fields after submission
    setName('');
    setDescription('');
    setImage(null);
    setImagePreview(null);
    setCollectionName('');
    setSupply(1);
    setExternalLink('');
    setTraits([]);
  };

  // Function to handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Set image state and preview image
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Function to add a new trait
  const addTrait = () => {
    const newTrait = prompt('Enter a new trait:');
    if (newTrait) {
      setTraits([...traits, newTrait]);
    }
  };

  return (
    <div style={{ 
      backgroundImage: `url(${mintBackground})`, 
      backgroundSize: 'cover', 
      backgroundAttachment: 'fixed', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      minHeight: '100vh',
      padding: '100px 20px', 
      color: 'white', 
      textAlign: 'center',
      fontFamily: 'Roboto, sans-serif' // Apply Roboto font to entire component
    }}>
 <div style={{
      background: 'linear-gradient(to right, #11998e 0%, #38ef7d 100%)', // Dark purple to black gradient
      padding: '10px',
      borderRadius: '10px',
      maxWidth: '800px',
      margin: '0 auto',
      marginBottom: '30px'
    }}>
      <h2 style={{ color: 'white', fontSize: '36px', margin: '0' }}>Create an NFT</h2>
    </div>
          <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px', maxWidth: '800px', margin: '0 auto' }}>
        <label style={{ color: 'white', marginBottom: '10px' }}>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ marginBottom: '20px', padding: '10px', width: '100%' }} required />

        <label style={{ color: 'white', marginBottom: '10px' }}>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ marginBottom: '20px', padding: '10px', width: '100%' }} required />

        <label style={{ color: 'white', marginBottom: '10px' }}>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: '20px' }} required />

        {/* Image preview area */}
        {imagePreview && (
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: 'white' }}>Image Preview:</h4>
            <img src={imagePreview} alt="NFT Preview" style={{ maxWidth: '100%', maxHeight: '200px', border: '1px solid #ccc', borderRadius: '5px' }} />
          </div>
        )}

        <label style={{ color: 'white', marginBottom: '10px' }}>Collection:</label>
        <input type="text" value={collectionName} onChange={(e) => setCollectionName(e.target.value)} style={{ marginBottom: '20px', padding: '10px', width: '100%' }} required />

        <label style={{ color: 'white', marginBottom: '10px' }}>Supply:</label>
        <input type="number" value={supply} onChange={(e) => setSupply(parseInt(e.target.value))} style={{ marginBottom: '20px', padding: '10px', width: '100%' }} required />

        <label style={{ color: 'white', marginBottom: '10px' }}>External link:</label>
        <input type="text" value={externalLink} onChange={(e) => setExternalLink(e.target.value)} style={{ marginBottom: '20px', padding: '10px', width: '100%' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {/* Add Trait button */}
          <button type="button" onClick={addTrait} style={{ padding: '10px 20px', background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add Trait</button>
        </div>

        {/* Traits section */}
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <h4 style={{ color: 'white', marginBottom: '10px' }}>Traits:</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {traits.map((trait, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{trait}</li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Cancel button */}
          <Link to="/" style={{ padding: '10px 20px', background: 'linear-gradient(to right, #434343 0%, #000000 100%)', color: '#fff', border: 'none', borderRadius: '50px', cursor: 'pointer', textDecoration: 'none' }}>Cancel</Link>
          {/* Mint NFT button */}
          <button type="submit" style={{ padding: '10px 20px', background: 'linear-gradient(to right, #11998e 0%, #38ef7d 100%)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mint NFT</button>
        </div>
      </form>
    </div>
  );
}

export default MintNFT;
