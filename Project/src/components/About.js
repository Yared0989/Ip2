import React from 'react';

export default function About(props) {

  let myStyle = {
    color: props.mode==='dark'?'white':'#3c2aad',
    backgroundColor: props.mode==='light'?'white':'#3c2aad',
    // border: "5px",
    // borderColor: "black",
    // borderRadius: "50%",
  
  }
  console.log(props.mode)
  console.log(myStyle)
  return (
  <div className="container" style={myStyle}>
  <h1 style={myStyle}>About Project</h1>
  <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       <strong>Functionality</strong> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <strong>1.</strong> You can Edit text in textbox area. These texts are controlled by bottom operations.<br /><br />
        <strong>2.</strong> This app makes you to switch into Night Mode. After you turn into night or light mode you get Notification.<br /><br />
        <strong>3.</strong> This app makes you to capitalize words. <br /><br />
        <strong>4.</strong> This app makes you to select and copy the text in texe field. <br /><br />
        <strong>5.</strong> This app makes you to see the number of words and characters in text area. <br /><br />
        <strong>6.</strong> This app makes you to see number of time to speak text and number of time to read . <br /><br />
        <strong>7.</strong> This app makes you to convert characters into lowercase character. <br /><br />
        <strong>8.</strong> This app makes you to preview texts automatically if you enter some text <br /><br />
        <strong>9.</strong> This app send some message to you if you click the button before entering some character. <br /><br />
        <strong>10.</strong> In this About page you can resize the buttons . <br /><br />
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>Developers</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <h6>Yared Sebsbe</h6> <br />
        <h6>Eyasu Dereje</h6><br />
        <h6>Estifanos Kinde</h6> <br />
        <h6>Yabsira Tafa</h6><br />
        <h6>Kaleab Alemayehu</h6><br />
        <h6>Henok Wondesen</h6><br />
        <h6>Natnael Getu</h6>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <strong>Message</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        This is Internet Programming assignment developed by Unity University N5 students. Because of final exam we didn't have time to expand this project. <br />
        Thank You!
      </div>
    </div>
  </div>

  
</div>

  </div>
  )
}
