import './Document.css'

export default function Document() {
    return(
        <div className='Document card col p-4 m-2'>
            <div className=''>
                <h2><b>DOCUMENT</b></h2>
            </div>
            <br />
            <div className='card-body text-left'>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Application Number: </b></td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><b>Date Submitted: </b></td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><b>Patent Number: </b></td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><b>Issue Date: </b></td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><b>Assignees: </b></td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td><b>Inventors: </b></td>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div>
                    <div>
                        <h3><b><u>Abstract</u></b></h3>
                        <p>...</p>
                    </div>
                    <div>
                        <h3><b><u>Description</u></b></h3>
                        <p>...</p>
                    </div>
                    <div>
                        <h3><b><u>Claims</u></b></h3>
                        <p>...</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}