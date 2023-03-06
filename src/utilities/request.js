export async function sendRequest(url, method ='GET', payload = null, error = 'Bad Request'){

    // intialize the options object
    const options = { method }

    if(payload){
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(payload)
        console.log('options.body', options.body)
    }

    const res = await fetch(url, options);

    if(res.ok) return res.json()
    throw new Error(error)
}
