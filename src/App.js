import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import { ThemeProvider } from './contexts/ThemeContext';
import PageContent from './PageContent';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
