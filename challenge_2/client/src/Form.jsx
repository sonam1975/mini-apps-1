import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      county: "",
      city: "",
      roles: "",
      sales: ""
    };
  }

  handleSearch() {}

  render() {
    return (
      <form>
        <input
          id="search"
          type="text"
          name="name"
          value=""
          placeholder="Search..."
          size="100"
          onChange={this.handleSearch}
        ></input>
      </form>
    );
  }
}

export default Form;
