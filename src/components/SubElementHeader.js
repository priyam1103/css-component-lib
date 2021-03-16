import React from 'react'
import copy from "copy-to-clipboard";

export default function SubElementHeader({Name,Desc,eleno,click,showcode,excode,maincode}) {
    return (
        <div className="sub-element">
        <div className="head">
          <div>
                    <h3>{Name}</h3>
                    <p className="description">{Desc}</p>
          </div>
          <div onClick={() => click(eleno)}>Code</div>
        </div>
        {showcode.includes(eleno) && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p onClick={()=>copy(`${excode}`)}>Copy</p>
            </div>
            <div class="content">
              <pre>
                <code>
                  {`${excode}`}
                </code>
              </pre>
            </div>
          </div>
        )}
      {maincode}
      </div>
    )
}
