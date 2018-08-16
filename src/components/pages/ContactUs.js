import React, { Component } from 'react';

import validator from 'validator';

import {postToWebform} from '../../utils/postToAPI';
import PastorImg from '../../assets/Cam-and-Amanda-square.jpg';

class ContactUs extends Component {
  constructor(){
    super();
    this.state = {name: "",
                  email: "",
                  subject: "",
                  message: "",
                  formErrorMessage: ""
                  }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    var change = {};
    change[e.target.name] = value;
    this.setState(change);
    //console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    var errorMessage = "";

    if(validator.isEmpty(this.state.name))
    {
      errorMessage += "Please enter your name.<br/>";
    }
    if(validator.isEmpty(this.state.email) || !validator.isEmail(this.state.email))
    {
      errorMessage += "Please enter a valid email address.<br/>";
    }


    if(errorMessage !== "")
    {
      this.setState({formErrorMessage:errorMessage});
      return false;
    }
    else
    {
      this.setState({formValid:true});
      console.log(this.state);
      /*handle posting to drupal and show success message*/
      //strip 4byte utf8 characters / emojis with .replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, '')
      var form = new FormData();
      form.append("webform", "05d787d7-7ed5-4a6f-9ce3-a9d3af08b2ca");
      form.append("submission[data][1][values][0]", this.state.name.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
      form.append("submission[data][2][values][0]", this.state.email.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
      form.append("submission[data][3][values][0]", this.state.message.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));
      form.append("submission[data][4][values][0]", this.state.subject.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, ''));

      var that = this;
      postToWebform(form, function(data){
        that.setState({submissionID:data.sid})
        that.setState({formSubmitted:true})
      })
    }

  }

  render() {

    var contactForm = (
      <section>

      <div id="block-block-54" className="block block-block contact-column">
            <h3 className="header-lightBlue">Contact Cornerstone</h3>

      <br/>
      <form onSubmit={this.handleSubmit}><div><div className="form-item form-group form-type-textfield form-item-name">
        <label htmlFor="edit-name">Your name <span className="form-required" title="This field is required.">*</span></label>
       <input className="form-control form-text required" type="text" id="edit-name" name="name" size="60" maxLength="255" onChange={this.handleChange.bind(this)} value={this.state.name} />
        </div>
        <div className="form-item form-group form-type-textfield form-item-mail">
          <label htmlFor="edit-mail">Your e-mail address <span className="form-required" title="This field is required.">*</span></label>
         <input className="form-control form-text required" type="text" id="edit-mail" name="email" size="60" maxLength="255" onChange={this.handleChange.bind(this)} value={this.state.email} />
        </div>
        <div className="form-item form-group form-type-textfield form-item-mail">
          <label htmlFor="edit-subject">Subject</label>
         <input className="form-control form-text required" type="text" id="edit-subject" name="subject" size="60" maxLength="255" onChange={this.handleChange.bind(this)} value={this.state.subject} />
        </div>
        <div className="form-item form-group form-type-textarea form-item-message">
          <label htmlFor="edit-message">Message</label>
         <div className="form-textarea-wrapper"><textarea className="form-control form-textarea required" id="edit-message" name="message" cols="60" rows="5" onChange={this.handleChange.bind(this)} value={this.state.address}></textarea></div>
        </div>

        <div className="form-actions form-wrapper" id="edit-actions"><input className="btn btn-primary btn-sm form-submit" type="submit" id="edit-submit" name="submit"  value="Send message" /></div></div>
        </form>
        </div>
        <p><strong><span dangerouslySetInnerHTML={{__html: this.state.formErrorMessage}} /> </strong></p>
      </section>
    );

  var messageSent = (
    <div className="content block block-block">
      <p>Thank you for contacting us! <br/><br/> We will get back to you as soon as possible.</p>
      <br/>
      {/*<a href="/"><input type="button" value="Return to the Home Page?" className="btn btn-primary"/></a>*/}
    </div>
  );

    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Contact Us</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Contact Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content-region">
    <div className="container">
      <div className="row">

        {/* If the Sidebar First has content then it will be rendered */}


        {/* /Sidebar First region */}

        {/* Rendering of the main content */}

        <div id="main-content-region" className="main-content">

          {/* Output the messages */}




  <div className="content">

    <div className="col-md-4 col-xs-12">
        <h3 className="header-lightBlue"><img src={PastorImg} alt="Cam and Amanda" width="273" height="273" /><br/>
    Pastor</h3>
    <strong>Campbell Markham</strong><br/>
    pictured here with his wife&nbsp;<br/>
    Amanda-Sue Markham<br/>
    <b>E</b>: <a href="mailto:campbell.markham@gmail.com" target="_blank" rel="noopener noreferrer">campbell.markham@gmail.com</a>
    </div>

    <div className="col-md-4 col-xs-12">
      <h2 className="header-lightBlue contact-header">Sunday Service</h2>
      <p>We love Jesus, and we love to welcome visitors!</p>
      <p>10:00am - 11:30am, followed by tea/coffee and fellowship.<br/> Alphacrucis College<br/> 45 Melville Street<br/> Hobart, Tasmania</p>
      <p>Proceed through the main gate, the door is at the back of the carpark.</p>
      <p>Our auditorium is upstairs. Please let one of our welcome team know if you would like assistance with the stairs. We have also installed a chairlift and we encourage its use.</p>
      <h3 style={{color: "#126880"}}><strong>Sunday Parking</strong></h3>
      <p>We have a small amount of onsite parking available, and&nbsp;the Red Cross have given permission for us to use their small carpark directly across the&nbsp;road from church. If these are full,&nbsp;the Hobart Central Carpark is 200m&nbsp;further along Melville St, across the Elizabeth Street <br/>intersection,&nbsp;with three hours of free parking on Sunday.</p>
      <p><strong><em>Please be careful parking on the street, meters operate on Sunday.</em></strong></p>
      <h3 style={{color: "#126880"}}><strong>Cornerstone Office</strong></h3>
      <p>45 Melville Street<br/> Hobart, Tasmania</p>
      <p>Our office is in the front section of the property. <br/>From the footpath, enter through the black door and then head up the stairs.</p>
      <p><strong><em>Please contact the pastor to make an appointment.</em></strong></p>

    </div>

    <div className="col-md-4 col-xs-12">
      {!this.state.formSubmitted ? contactForm : messageSent}
</div>
      </div>
</div>
        </div> {/* /main-content-region */}


      </div> {/* /row */}
    </div> {/* /container */}

      </section>
    );
  }
}

export default ContactUs;
