import React from "react";
import Form from "/Users/sonam/Desktop/Hack Reactor Programming /hrsf125-mini-apps-1/challenge_2/client/src/Form.jsx";
import Table from "/Users/sonam/Desktop/Hack Reactor Programming /hrsf125-mini-apps-1/challenge_2/client/src/Table.jsx";
import csvReport from "/Users/sonam/Desktop/Hack Reactor Programming /hrsf125-mini-apps-1/challenge_2/samples/dummy.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      csvReport: csvReport
    };
    this.searchFor = this.searchFor.bind(this);
  }

  searchFor(term) {
    this.setState({ term: term });
  }

  componentDidMount() {
    const pointer = this;
    fetch("/report")
      .then(function(response) {
        return response.json();
      })
      .then(function(results) {
        pointer.setState({ csvReport: results });
      })
      .catch(function() {
        console.log("error");
      });
  }

  render() {
    return (
      <div>
        <Form searchFor={this.searchFor} />
        <Table csvReport={this.state.csvReport} term={this.state.term} />;
      </div>
    );
  }
}
export default App;
