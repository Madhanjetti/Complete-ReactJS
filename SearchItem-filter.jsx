import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
  ]);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const boxStyle = {
    margin: '20px',    
    padding: '10px',     
    border: '5px solid black', 
    width: '200px',       
    height: '200px',      
    backgroundColor: 'lightblue' 
  };
  return (
    <div>
        <center>
            <div style={boxStyle}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul type='null'>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
      </center>
      
    </div>
  );
};

export default Search;
