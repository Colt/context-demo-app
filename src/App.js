import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from './PageContent'
import ThemeProvider from './contexts/ThemeContext'

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
