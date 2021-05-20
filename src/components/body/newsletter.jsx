import React from "react";

function Newslettersignup() {

  return (
    <div className="cont">
      <div class="row pad-top-sm-6 pad-btm-sm-6 pad-top-xs-3 pad-btm-xs-3 type-white footer-newsletter__wrap">
								<div class="col col-sm-6 pad-btm-sm-0 pad-btm-xs-2">
					<h2>Keep up with Alex,<br/>sign up for our Newsletter</h2>
				</div>
								<div class="col col-sm-6">
					<form method="POST" class="footer-newsletter__form">
						<input type="email" name="email" placeholder="Your email address" class="footer-newsletter__form-field" required=""/>
						<input type="text" name="hduuss" class="vis-hidden"/>
						<button type="submit" class="footer-newsletter__form-btn btn btn--purple btn--shadow">Send</button>
					</form>
										<div class="copy-block footer-newsletter__tym">
						<p class="type-white margin-top-xs-1 type-semi-bold">Thank you for signing up.</p>
					</div>
									</div>
			</div>
    </div>
  );
}

export default Newslettersignup;