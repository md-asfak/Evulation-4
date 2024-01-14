import React from "react";
import "./Display.css";

export default function DisplayComponent(Props) {
  return (
    <>
      <center>
        <h1>Welcome To Evulation</h1>
      </center>
      {Props.Student.map((el) => {
        return (
          <>
            <div className="container">
              <table>
                <tr className="Head">
                  <th>
                    <h2>Id </h2>
                  </th>

                  <th>
                    <h2>Name </h2>
                  </th>
                  <th>
                    <h2>Age </h2>
                  </th>
                  <th>
                    <h2>Course </h2>
                  </th>

                  <th>
                    <h2>Institute</h2>
                  </th>

                  <th>
                    <h2>Traner Name</h2>
                  </th>

                  <th>
                    <h2>Mentor Name</h2>
                  </th>
                </tr>

                <tr className="text">
                  <td>
                    <h3>{`  ${el.Id}`}</h3>
                  </td>

                  <td>
                    <h3>{`  ${el.Name}`}</h3>
                  </td>

                  <td>
                    <h3>{`  ${el.Age}`}</h3>
                  </td>

                  <td>
                    <h3>{`  ${el.Course_Name}`}</h3>
                  </td>

                  <td>
                    <h3>{`  ${el.Institute}`}</h3>
                  </td>

                  <td>
                    <h3>{`  ${el.Traner_Name}`}</h3>
                  </td>

                  <td>
                    <h3>{`  ${el.Mentor_Name}`}</h3>
                  </td>
                </tr>
              </table>
            </div>
          </>
        );
      })}
    </>
  );
}
