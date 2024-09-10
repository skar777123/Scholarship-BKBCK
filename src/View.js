import React, { useEffect, useState } from "react";
import axios from "axios";
import { FidgetSpinner } from "react-loader-spinner";
import Iview from "./Iview";

export default function View() {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  const [form, setForm] = useState();
  async function fetch() {
    await axios
      .get("http://sw-403g.onrender.com//form/fetch")
      .then((res) => {
        setData(res.data.user);
        console.log(data);
      })
      .catch((err) => console.error(err));
    if (!data) {
      setLoader(true);
    }
  }
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundColor: "whitesmoke",
          padding: 30,
          margin: 10,
          borderRadius: 20,
          width: 600,
          position: "absolute",
        }}
      >
        <h1>Submitted Forms:{}</h1>
        {!loader && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FidgetSpinner />
          </div>
        )}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">First</th>
              <th scope="col">StudentId</th>
              <th scope="col">Course</th>
              <th scope="col">Form</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                function formFetch() {
                  setForm(item);
                  console.log(form);
                }
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.studentId}</td>
                    <td>{item.course}</td>
                    <td>
                      <button onClick={formFetch}>Check Form</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "whitesmoke",
          padding: 30,
          marginLeft: 640,
          marginTop: 20,
          borderRadius: 10,
          width: 870,
        }}
      >
        {form ? (
          <Iview form={form} />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            Check a Form to view
          </div>
        )}
      </div>
    </div>
  );
}
