import React from 'react'
import { Icon } from 'semantic-ui-react'


export default function AppNavbar({setOpenDrawer,show}) {
    return (
        <div className="app-navbar">
            <Icon name='bars' onClick={()=>setOpenDrawer(!show)} color="red" size='large' style={{ padding: "0.5rem 1rem",cursor:"pointer"}} />
        </div>
    )
}
