import React from "react";

class Banner extends React.Component {
  state = {
    showSearch: false,
  };

  render() {
    return (
      <div className="banner text-white">
        <div className="container p-4 text-center">
          <div>
            <span>
              A place to{" "}
              <span
                id="get-part"
                onClick={() => this.setState({ showSearch: true })}
              >
                get
              </span>
            </span>
            {this.state.showSearch && (
              <input
                onChange={(e) => this.props.onSearch(e.target.value)}
                type="text"
                id="search-box"
              />
            )}
            <span> the cool stuff.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
