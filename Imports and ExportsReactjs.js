Using Imports and Exports in React Components
React components are often defined in separate files and imported as needed.

Example of a Component with Named Export:
// Header.js
import React from 'react';

export const Header = () => {
  return <h1>Welcome to My App</h1>;
};
Example of a Component with Default Export:
// Footer.js
import React from 'react';

const Footer = () => {
  return <footer>© 2024 My App</footer>;
};

export default Footer;

Using the Components:

// App.js
import React from 'react';
import { Header } from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <p>This is the main content of the app.</p>
      <Footer />
    </div>
  );
};

export default App;
