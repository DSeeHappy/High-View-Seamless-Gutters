import React from "react";
import { Link } from "gatsby";

const News = () => {
  return (
    <section className="blog-one blog-page">
      <div className="container">
        <div className="row">
        
        </div>
        <div className="post-pagination">
          <a href="#">
            <i className="fa fa-angle-double-left"></i>
          </a>
          <a className="active" href="#">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">
            <i className="fa fa-angle-double-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
