import React from "react";
import Tablelist from "/Users/sonam/Desktop/Hack Reactor Programming /hrsf125-mini-apps-1/challenge_2/client/src/Tablelist.jsx";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var term = "";
    if (this.props.term !== "") {
      term = this.props.term;
    }
    return (
      <table>
        <thead>
          <tr>
            <th colspan="2">CSV Generator</th>
          </tr>
        </thead>
        <tbody>
          <tr id="head">
            <td>First Name</td>
            <td>LastName</td>
            <td>County</td>
            <td>City</td>
            <td>Role</td>
            <td>Sales</td>
          </tr>
          {this.props.csvReport
            .filter(x => {
              return (
                x.firstname.toLowerCase().includes(term.toLowerCase()) ||
                x.lastname.toLowerCase().includes(term.toLowerCase()) ||
                x.county.toLowerCase().includes(term.toLowerCase()) ||
                x.city.toLowerCase().includes(term.toLowerCase()) ||
                x.role.toLowerCase().includes(term.toLowerCase()) ||
                x.sales.toLowerCase().includes(term.toLowerCase())
              );
            })
            .map((info, i) => (
              <Tablelist key={i} info={info} />
            ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
