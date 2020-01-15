import "../index.css";
import "./Gallery.css";
import React from "react";
import items from "./items";
import { Link, Router } from "react-router-dom";

class Gallery extends React.Component {
  state = {
    visible: 9
  };

  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 9 };
    });
  }
  /* below we can use const path=`/${item.id}` and src={path}*/
  render() {
    return (
      <section>
        <div classsName="gallery">
          {items.slice(0, this.state.visible).map(item => {
            return (
              <div className="galleryImage" key={item.id}>
                <Router>
                  <Link to={`/${item.id}`}>
                    <p className="textOnImage">{item.id}</p>
                    <img src={item.download_url} alt="" />
                  </Link>
                </Router>
              </div>
            );
          })}
        </div>
        {this.state.visible < items.length && (
          <div className="buttondiv">
            <button
              onClick={e => this.loadMore(e)}
              type="button"
              className="load-more"
            >
              Load more
            </button>
          </div>
        )}
      </section>
    );
  }
}
export default Gallery;
// ReactDOM.render(<Gallery />, document.getElementById("root"));
