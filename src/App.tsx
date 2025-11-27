import { Router, Route } from './router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Formations } from './pages/Formations';
import { Recrutement } from './pages/Recrutement';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Route path="/" component={Home} />
          <Route path="/a-propos" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/formations" component={Formations} />
          <Route path="/recrutement" component={Recrutement} />
          <Route path="/contact" component={Contact} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
