import React from 'react';
import { Link } from "react-router-dom";

function defaultLayout(props) {
  return(
       <div>
           <div className="header bs1">
               <div className="d-flex justify-content-between">

                   <Link to="/">
                   <h1>Bike Rental Portal</h1>
                    </Link>
        

               </div>

           </div>
           <div className="content">
               {props.children}
           </div>
  
      </div>
  );
}

export default defaultLayout;
