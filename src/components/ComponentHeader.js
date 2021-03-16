import React from 'react'

export default function ComponentHeader({compname,compdesc}) {
    return (
        <>
             <div className="header">
                <h1 className="name">{compname}</h1>
                <p className="description">{compdesc}</p>
      </div>

      <div className="border-margin"></div>

      <div className="sub-header">
        <h2 className="name">Types</h2>
      </div>
      <div className="border"></div>
        </>
    )
}
