import QRCode from "qrcode.react"
export function Ticket() {
    return<div>
        <div style={{marginBottom:"10px"}}>
        <h3>QR Code</h3>
        <QRCode value="http://facebook.github.io/react/" />
        </div>
        <button style={{backgroundColor:"lightgreen" ,color:"white"}} onClick={()=>{}}>Download</button>
    </div>
}