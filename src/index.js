import ReactDOM from 'react-dom/client';
import React from 'react';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <main></main>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
