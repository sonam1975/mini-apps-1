import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //set state is an asynchronous function
      term: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({ term: event.target.value }, () => {
      this.props.searchFor(this.state.term);
    });
  }

  render() {
    return (
      <form>
        <input
          id="search"
          type="text"
          name="name"
          placeholder="🔎Search..."
          size="100"
          onChange={this.handleSearch}
          value={this.state.term}
        ></input>
      </form>
    );
  }
}

export default Form;
