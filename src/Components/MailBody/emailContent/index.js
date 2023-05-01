import React from "react";
import EmailHeader from "../emailHeader";
import EmailContentBody from "../EmailContentBody";
import './index.css' 
// const ContentContainer  = styled('div')({
    
//   borderRadius: '1px',
//   border: '1px solid rgba(243, 242, 241, 1)',
//   backgroundColor: 'rgba(255, 255, 255, 1)',
//   padding: '9px 21px 9px 13px',
//   marginRight: '27px',
//   height: 'inherit',
  
// });
const EmailContent = () => {
  return (
    <div className="ContentContainer">
      <EmailHeader />
      <EmailContentBody />
    </div>
  );
};

export default EmailContent;
