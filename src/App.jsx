// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FormPage from './pages/FormPage';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white">
        <header className="bg-red-600 text-white py-4">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-semibold text-center">Quotation Generator</h1>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto p-6">
          <FormPage />
        </div>
      </div>
    </Provider>
  );
};

export default App;