import React from "react";
import meeting1 from "../assets/images/meeting-1-1.jpg";
import chat1 from "../assets/images/chat-1-1.jpg";
import chat2 from "../assets/images/chat-1-2.jpg";
const MeetingOne = () => {
  return (
    <section className="meeting-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="meeting-one__image">
              <img src={meeting1} alt="Awesome alter text" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="meeting-one__content">
              <div className="block-title text-left">
                <h2 className="block-title__title">Prompt Communication</h2>
              </div>
              <p className="meeting-one__block-text">
                We understand the biggest problem can be communication,
                especially when there's an issue it can feel like everyone just
                left town.
              </p>
              <br />
              <h3 className="block-title__title">We are Local</h3>
              <hr />
              <p className="meeting-one__block-text">
                We pride ourselves in making sure we have a trusted name in
                Colorado.
              </p>
              <br />
              <p className="meeting-one__block-text">
                We live here and want to feel proud when we say we work at High
                View's Seamless Gutters.
              </p>
              <br />
              <p className="meeting-one__block-text">
                We want you to feel the same when you say High View's Seamless
                Gutters are installed on my home.
              </p>
              <br />
              <p className="meeting-one__block-text">
                If you find yourself with an issue, we make sure to resolve
                these problems as prompt as possible. While infrequent these
                problems may be, we know nothing can be 100%.
              </p>
              <br />
              <h3 className="meeting-one__block-large-text">
                We strive to be the company you think of when it comes to a
                trusted Gutter Company
              </h3>
              <div className="meeting-one__box-wrap">
                <div className="meeting-one__box">
                  <div className="meeting-one__bubble">
                    Hello, my gutters are leaking!
                  </div>
                  <img src={chat1} alt="Awesome alter text" />
                  <h3 className="meeting-one__title">Rhonda McHomeowner</h3>
                  <p className="meeting-one__text">Homeowner</p>
                </div>
                <div className="meeting-one__box">
                  <div className="meeting-one__bubble">
                    Hello, Rhonda we will resolve this issue right away!
                  </div>
                  <img src={chat2} alt="Awesome alter text" />
                  <h3 className="meeting-one__title">Sam Avila</h3>
                  <p className="meeting-one__text">
                    Co-Owner | Project Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingOne;
