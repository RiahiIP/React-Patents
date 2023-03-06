import './Document.css'

export default function Document({documentData}) {
    return(
        <div className='Document card col p-4 m-2'>
            <div className=''>
                <h2><b>{documentData.title}</b></h2>
                <a href={`${documentData.patentPDF}`} target="_blank" rel="noopener noreferrer">{documentData.patentPDF}</a>
            </div>
            <br />
            <div className='card-body text-left'>
                {
                    
                }
                <div>
                    <table>
                        <tbody>
                            {documentData.applicationNumber &&
                            <tr>
                                <td><b>Application Number: </b></td>
                                <td>{documentData.applicationNumber}</td>
                            </tr>
                            }
                            
                            {documentData.dateSubmitted &&
                            <tr>
                                <td><b>Date Submitted: </b></td>
                                <td>{documentData.dateSubmitted}</td>
                            </tr>
                            }
                            
                            {documentData.patentNumber &&
                            <tr>
                                <td><b>Patent Number: </b></td>
                                <td>{documentData.dateSubmitted}</td>
                            </tr>
                            }
                            
                            {documentData.issueDate &&
                            <tr>
                                <td><b>Issue Date: </b></td>
                                <td>{documentData.issueDate}</td>
                            </tr>
                            }
                            
                            {documentData.assigneeList &&
                            <tr>
                                <td><b>Assignees: </b></td>
                                <td>{documentData.assigneeList.toString(',')}</td>
                            </tr>
                            }

                            {documentData.inventorList &&
                            <tr>
                                <td><b>Inventors: </b></td>
                                <td>{documentData.inventorList.toString(',')}</td>
                            </tr>
                            }
                            
                            
                        </tbody>
                    </table>
                </div>
                <br />
                <div>
                    {documentData.abstract &&
                    <div>
                        <h3><b><u>Abstract</u></b></h3>
                        <p>{documentData.abstract}</p>
                    </div>
                    }
                    
                    {documentData.description &&
                    <div>
                        <h3><b><u>Description</u></b></h3>
                        <p>{documentData.description}</p>
                    </div>
                    }
                    
                    {documentData.claims &&
                    <div>
                        <h3><b><u>Claims</u></b></h3>
                        <p>{documentData.claims}</p>
                    </div>
                    }
                    
                </div>
            </div>
            
        </div>
    )
}