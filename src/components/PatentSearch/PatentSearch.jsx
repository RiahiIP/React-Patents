import './PatentSearch.css'

import PatentSearchForm from '../PatentSearchForm/PatentSearchForm'

export default function PatentSearch() {
    return(
        <div className='PatentSearch card col-4 p-4 m-2'>
            <div className=''>
                <h2><b>PATENT SEARCH</b></h2>
            </div>
            <br />
            <div>
                <PatentSearchForm />
            </div>
        </div>
    )
}