import React from "react";
import Card from "../card/Card";
import "../css/card.css";
import "tachyons";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import { fetchData$ } from "../store/actions";

class CardList extends React.Component {
  componentDidMount = () => {
    console.log("inside componentDidMount");
    this.props.fetchData1();
  };

  render() {
    const { list } = this.props;
    return (
      <div
        style={{ height: "600px", overflow: "auto" }}
        ref={ref => (this.scrollParentRef = ref)}
      >
        <InfiniteScroll
          pageStart={0}
          hasMore={true}
          useWindow={false}
          initialLoad={false}
          getScrollParent={() => this.scrollParentRef}
          loadMore={this.props.fetchData1}
        >
          <div>
            {list.map((item, i) => {
              return (
                <Card
                  key={i}
                  url={item.url}
                  thumbnailUrl={item.thumbnailUrl}
                  id={item.id}
                  title={item.title}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    limit: state.limit,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData1: () => dispatch(fetchData$.trigger())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
