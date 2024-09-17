// import logo from './logo.svg';
import './App.css';
// import Test from './Test';
// import Header from './components/Layouts/Header';
import Header from './components/Layouts/Header/Header';
import Main from './components/Layouts/Main';
import Footer from './components/Layouts/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen relative'>
      {/* <Test /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
