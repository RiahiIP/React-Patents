import './Document.css'

export default function Document({documentData}) {
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
                                <td>{documentData.applicationNumber}</td>
                            </tr>
                            <tr>
                                <td><b>Date Submitted: </b></td>
                                <td>{documentData.dateSubmitted}</td>
                            </tr>
                            <tr>
                                <td><b>Patent Number: </b></td>
                                <td>{documentData.patentNumber}</td>
                            </tr>
                            <tr>
                                <td><b>Issue Date: </b></td>
                                <td>{documentData.issueDate}</td>
                            </tr>
                            <tr>
                                <td><b>Assignees: </b></td>
                                <td>{documentData.assigneeList}</td>
                            </tr>
                            <tr>
                                <td><b>Inventors: </b></td>
                                <td>{documentData.inventorList}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div>
                    <div>
                        <h3><b><u>Abstract</u></b></h3>
                        <p>{documentData.abstract}</p>
                    </div>
                    <div>
                        <h3><b><u>Description</u></b></h3>
                        <p>{documentData.description}</p>
                    </div>
                    <div>
                        <h3><b><u>Claims</u></b></h3>
                        <p>{documentData.claims}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}