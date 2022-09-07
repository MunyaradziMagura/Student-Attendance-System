//File imports to use 'useState' hook and 'BarcodeReader' component from 'react-barcode-reader' library
import React from 'react'
import {useState} from 'react'
import BarcodeReader from 'react-barcode-reader'

function BarcodeScanner() {

    //Setting initial 'useState' values to an empty string for our result variables
    const [result, setResult] = useState("")

    var array = [] //Storage for the initial scanned input that comes in plain text/string format
    var newArray = [] //Storage for the converted JSON objects

    //Custom function that reads in an element from the barcode scanner, parses the strings into JSON format and stores
    //the JSON object into 'newArray'
    function convertToJSON(element) {
        let jsonFormat = JSON.parse(element)
        // console.log(jsonFormat)

        newArray.push(jsonFormat)
    }
    
    //Rendering of the BarcodeScanner component onto the screen
    return (
        
        //Style of display none is to prevent the scnnaed input from being output onto the browser
        <div style={{display: "none"}}>
            
            <BarcodeReader minLength={48} //Minimum number of characters that must be scanned before input will be read
                onScan={(data) => setResult(result + "||" + data)} //Concatenates a 'salt' at the end of our strings
            />

        {/* Splits our array on the '||' salt*/}
        {array = result.split("||")}

        {/* Filters out the initial array starting value of an empty string, returning only non-empty array elements*/}
        {array = array.filter(element => {            
            return element !== '';
        })}

        {/* For each element in the array, convert each into JSON format */}
        {array.forEach(convertToJSON)}
        {/* {console.log(newArray)} */}
        </div>
    )
}

export default BarcodeScanner