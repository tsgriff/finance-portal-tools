import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <section className="blog-footer">
        <div className="blog-footer-text">
          &copy; {new Date().getFullYear()}
        </div>
      </section>
    );
  }
}

export default Footer;