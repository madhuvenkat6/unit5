import QRCode from "qrcode.react"
import { useSelector } from "react-redux"

export function Ticket() {
    const ticket = useSelector((store) => store.ticket)
    console.log(ticket);
    return <div>
        <div style={{ height: "300px", width: "250px", border: "1px solid black" ,margin:"auto",marginTop:"20px",borderRadius:"10px"}}>
            <div>
                <h3>{ticket.name}</h3>
                <h4 style={{color:"red"}}>{ticket.time}</h4>
            </div>
            
            <div style={{ marginTop: "5px" }}>
                <QRCode value="http://facebook.github.io/react/" />
                <div>QR Code</div>
            </div>
            <button style={{ backgroundColor: "lightgreen", color: "white" }} onClick={() => { }}>Download</button>
        </div>


    </div>
}