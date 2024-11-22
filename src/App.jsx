import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FormPage from './pages/FormPage';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Quotation Generator</h1>
        <FormPage />
      </div>
    </Provider>
  );
};

export default App;
