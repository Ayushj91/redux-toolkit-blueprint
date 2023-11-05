import logo from './logo.svg';
import './App.css';
import TodoForm from './form';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );
}

export default App;
