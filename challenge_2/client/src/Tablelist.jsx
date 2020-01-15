import React from "react";

const Tablelist = ({ info }) => (
  <tr>
    <td>{info.firstname}</td>
    <td>{info.lastname}</td>
    <td>{info.county}</td>
    <td>{info.city}</td>
    <td>{info.role}</td>
    <td>{info.sales}</td>
  </tr>
);

export default Tablelist;
