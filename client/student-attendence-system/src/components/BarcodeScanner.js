import React from 'react'
import {useState} from 'react'
import BarcodeReader from 'react-barcode-reader'

function BarcodeScanner() {

    const [result, setResult] = useState("")
    var array = []
    var newArray = []

    function convertToJSON(element) {
        let jsonFormat = JSON.parse(element)

        newArray.push(jsonFormat)
    }
    
    return (
        <div style={{display: "none"}}>
            
            <BarcodeReader minLength={48}
          onScan={(data) => setResult(result + "||" + data)}
            />
        {array = result.split("||")}
        {array = array.filter(element => {            
            return element !== '';
        })}
        
        {array.forEach(convertToJSON)}
        </div>
    )
}

export default BarcodeScanner
