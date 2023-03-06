import './App.css';

import Document from '../../components/Document/Document'
import PatentSearch from '../../components/PatentSearch/PatentSearch'

import { useState } from 'react';


export default function App() {
  const [documentData, setDocumentData] = useState({
    title: 'DOCUMENT',
    patentPDF: '',
    applicationNumber: '',
    dateSubmitted: '',
    patentNumber: '',
    issueDate: '',
    assigneeList: '',
    inventorList: '',
    abstract: '',
    description: '',
    claims: '',
  })

  const updateDocument =async (patentData) => {
    // console.log('New data', patentData)
    setDocumentData(patentData)
  }

  return (
    <main className="App bg-secondary">
      <h1 className='text-center'>React Web Scraper</h1>
      <div className='row'>
        <PatentSearch documentData={documentData} updateDocument={updateDocument} />
        <Document documentData={documentData} />
      </div>
    </main>
  );
}


