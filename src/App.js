import Header from './components/Header';
import Column from './components/Column';
import Footer from './components/Footer';
import './App.css';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto+Condensed:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap');
</style>

function App() {
  return (
    <div className="App">
      <Header dogName="Scrappy" />
      <Column columnTitle="Walks"/>
      <Footer />
    </div>

  );
}

export default App;
