import React from 'react'

function Cars({color="skyblue",modal="nano"}) {
    return (
        <div style={{width:"200px",background:`${color}` }}>
            <div>Cars</div>
            <div>color:{color}</div>
            <div>modal:{modal}</div>
        </div>
    )
}

export default Cars