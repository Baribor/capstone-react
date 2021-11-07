import classes from './App.module.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

/**
 * Display a one page view of a replical of https://www.google.com
 * @returns none
 */
function App() {
  
  return (
    <div className={classes.container}>
      <Header />

      <Body />

      <Footer />
    </div>
  );
}

export default App;
