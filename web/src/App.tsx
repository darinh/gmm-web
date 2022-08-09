import React from 'react';
import { CoherenceHeader } from '@coherence-design-system/controls';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <CoherenceHeader
          headerLabel="Add header label here"
          appNameSettings={{
            label: 'App Name Settings Header'
          }}
        />
      </header>
    </div>
  );
}

export default App;
