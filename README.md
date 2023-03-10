# React Patent Scraper
- This is a single page application that looks up patent information (from the Patent ID or Application Number) on Google Patents using Node-Fetch@2.
- The data received is scraped and collected using Cheerio.
- The SPA has the Patent Search component on the left
- The relevant data is processed and rendered on the right side of the page.

<br>
<br>

# Technologies Used
- React
- Node
- Express
- MongoDB
- EJS
- node-fetch@2
- Cheerio

<br>
<br>

# Getting Started

- The link to the deployed web application on Railway, can be found below:

    https://riahi-ip-react-patents.up.railway.app/

<br>
<br>

# Deficiencies

- The Claims & Description sections are neatly seperated, but the IDs used to collect them change in certain situations and cannot be predicted reliably.
- Some dates cannot be reliably scraped.
- If the structure of the Google Patents website changes, the application would have to be refactored.