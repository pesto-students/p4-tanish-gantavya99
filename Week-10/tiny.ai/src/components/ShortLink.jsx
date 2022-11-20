import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShortLink = ({link,shortLink}) => {
  const notify=()=>toast("Copied to Clipboard !")
  return (
    <div className="Short-link">
      <CopyToClipboard text={shortLink}>
      <button onClick ={notify}
      className="copy-btn">COPY</button>
      </CopyToClipboard>
    
    <div className="result">
      {shortLink}
    </div>
    <ToastContainer
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      
        />
    </div>
  )
}

export default ShortLink