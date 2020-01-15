import React from "react";
import Tablelist from "/Users/sonam/Desktop/Hack Reactor Programming /hrsf125-mini-apps-1/challenge_2/client/src/Tablelist.jsx";

const Table = ({ csvReport }) => (
  <table>
    <thead>
      <tr>
        <th colspan="2">CSV Generator</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>First Name</td>
        <td>LastName</td>
        <td>County</td>
        <td>City</td>
        <td>Role</td>
        <td>Sales</td>
      </tr>
      {csvReport.map((info, i) => (
        <Tablelist key={i} info={info} />
      ))}
    </tbody>
  </table>
);

export default Table;
