// API url
const API_url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

// defining function
const getapi = async(URL) =>{
    const response = await fetch(URL)
    let data =await response.json()
    console.log(data)
}
getapi(API_url)
 
