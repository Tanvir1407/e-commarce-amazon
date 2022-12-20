import './App.css';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Shop from './components/shop/Shop';

const StyleSheet = {
  maxWidth: '1400px',
  margin: "0 auto",
}
function App() {
  return (
    <div style={StyleSheet}>
      <Header></Header>
      <Features></Features>
      <Shop></Shop>
    </div>
  );
}

export default App;
       