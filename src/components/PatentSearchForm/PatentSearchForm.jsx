import './PatentSearchForm.css'

export default function PatentSearchForm() {
    return(
        <div className='PatentSearchForm '>
            <form className='d-flex flex-column'>
                <input type="text" name='patentId' id='patentId' className='form-control' placeholder='Enter Patent ID'/>
                <br />
                <button type="submit" className="btn btn-primary mx-auto">Submit</button>
            </form>
        </div>
    )
}