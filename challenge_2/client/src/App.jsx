import React from "react";
import Form from "/Users/sonam/Desktop/Hack Reactor Programming /hrsf125-mini-apps-1/challenge_2/client/src/Form.jsx";
import Table from "/Users/sonam/Desktop/Hack Reactor Programming /hrsf125-mini-apps-1/challenge_2/client/src/Table.jsx";
// import csvReport from "/Users/sonam/Desktop/Hack Reactor Programming /hrsf125-mini-apps-1/challenge_2/samples/dummy.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csvReport: [
        {
          firstname: "Joshie",
          lastname: "Wyattson",
          county: "San Mateo",
          city: "San Mateo",
          role: "Broker",
          sales: "1000000"
        }
      ]
    };
  }

  componentDidMount() {
    const pointer = this;
    fetch("/report")
      .then(function(response) {
        return response.json();
      })
      .then(function(results) {
        console.log(results);
        pointer.setState({ csvReport: results });
      })
      .catch(function() {
        console.log("error");
      });
  }

  render() {
    return <Table csvReport={this.state.csvReport} />;
  }
}
export default App;
