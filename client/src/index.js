import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// heroku config:set MONGODB_URI="mongodb+srv://704abe:QkjjjNJtHw5LSUiE@cluster0.n9z04.mongodb.net/?retryWrites=true&w=majority"