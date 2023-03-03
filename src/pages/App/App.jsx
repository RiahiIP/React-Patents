import './App.css';

import Document from '../../components/Document/Document'
import PatentSearch from '../../components/PatentSearch/PatentSearch'

export default function App() {
  return (
    <main className="App bg-secondary">
      <h1 className='text-center'>React Web Scraper</h1>
      <div className='row'>
        <PatentSearch />
        <Document />
      </div>
    </main>
  );
}


