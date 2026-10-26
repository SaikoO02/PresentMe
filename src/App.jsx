import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Search from './components/Search';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">К содержимому</a>
      <div className="page">
        <Header />
        <div className="layout">
          <Menu />
          <main className="content" id="main-content" tabIndex={-1}>
            <Search />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
