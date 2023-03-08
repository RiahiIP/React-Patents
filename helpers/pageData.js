const fetch = require("node-fetch");
const cheerio = require('cheerio');



// function to get the raw data
const getRawData = (URL) => {
    return fetch(URL)
        .then((response) => response.text())
        .then((data) => cheerio.load(data))
        .then((data) => {
            return data;
        });
};

// start of the program
const pageData = async (patentId) => {
    // URL for data
    const URL = `https://patents.google.com/patent/${patentId}/en`;

    // Parsing the data
    const parsedPageData = await getRawData(URL);
    

    // TITLE
    const title = parsedPageData("[name='DC.title']").attr('content')

    // Patent PDF File
    const patentPDF = parsedPageData("[name='citation_pdf_url']").attr('content')
 
    // APPLICATION NUMBER
    const applicationNumber = parsedPageData("[name='citation_patent_application_number']").attr('content')
    
    // DATE SUBMITTED
    const dateSubmitted = parsedPageData("meta[scheme='dateSubmitted'][name='DC.date']").attr('content')
    
    // PATENT NUMBER
    const patentNumber = parsedPageData("[name='citation_patent_number']").attr('content')
    
    // ISSUE DATE (GRANTED)
    const issueDate = parsedPageData("meta[scheme='issue'][name='DC.date']").attr('content')
    
    // ASSIGNEES
    const rawAssigneeList = parsedPageData("meta[scheme='assignee'][name='DC.contributor']").toArray()
    let processedAssigneeList = []
    rawAssigneeList.forEach(element => {
        if (element.attribs.content != null) {
            processedAssigneeList.push(element.attribs.content)
        }
    });
    
    // INVENTORS
    const rawInventorsList = parsedPageData("meta[scheme='inventor'][name='DC.contributor']").toArray()
    let processedInventorsList = []
    rawInventorsList.forEach(element => {
        if (element.attribs.content != null) {
            processedInventorsList.push(element.attribs.content)
        }
    });
    
    // ABSTRACT
    const abstract = parsedPageData('.abstract').text()
    
    // CLAIMS
    const claimsList = () => {
        let claims = []
        let num = 1
        while (parsedPageData(`#CLM-0000${num}`).text() || parsedPageData(`#CLM-000${num}`).text() || parsedPageData(`#CLM-00${num}`).text()) {
            if (num < 10) {
                claims.push(parsedPageData(`#CLM-0000${num}`).text())
                num++
            } else if (num >= 10 && num < 100) {
                claims.push(parsedPageData(`#CLM-000${num}`).text())
                num++
            } else if (num >= 100 && num < 1000) {
                claims.push(parsedPageData(`#CLM-00${num}`).text())
                num++
            }
            
        }
        
        return claims
    }
    const claims = claimsList()
    // console.log(claims)
    
    // DESCRIPTION
    // const description = parsedPageData('.description').text()
    const descriptionList = () => {
        let descriptions = []
        let num = 2
        while (parsedPageData(`#p-000${num}`).text() || parsedPageData(`#p-00${num}`).text() || parsedPageData(`#p-0${num}`).text()) {
            if (num < 10) {
                descriptions.push(parsedPageData(`#p-000${num}`).text())
                num++
            } else if (num >= 10 && num < 100) {
                descriptions.push(parsedPageData(`#p-00${num}`).text())
                num++
            } else if (num >= 100 && num < 1000) {
                descriptions.push(parsedPageData(`#p-0${num}`).text())
                num++
            }
            
        }
        
        return descriptions
    }
    const description = descriptionList()

    return {
        title: title,
        patentPDF: patentPDF,
        applicationNumber: applicationNumber,
        dateSubmitted: dateSubmitted,
        patentNumber: patentNumber,
        issueDate: issueDate,
        assigneeList: processedAssigneeList,
        inventorList: processedInventorsList,
        abstract: abstract,
        claims: claims,
        description: description
    }



};


module.exports = {
    pageData,
}