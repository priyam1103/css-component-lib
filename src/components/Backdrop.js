import React from 'react'

export default function Backdrop({setOpenDrawer,show}) {
    return (
        <div className="backdrop" onClick={()=>setOpenDrawer(!show)}>

            
        </div>
    )
}