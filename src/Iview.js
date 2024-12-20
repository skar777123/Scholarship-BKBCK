import React from "react";
// import {useState} from "react";
import "./Iview.css";
// import { Vortex } from "react-loader-spinner";
// import axios from "axios";

export default function Iview(props) {
  // const [loading, setLoading] = useState(false);
  // const Approved = async () => {
  //   setLoading(true);
  //   await axios
  //     .post("https://sw-403g.onrender.com/form/approve",{
  //       number: "9834845397"
  //     })
  //     .catch(err => console.error(err));
  // };
  return (
    <div className="form-flex">
      <form>
        {/* Personal Details Section */}
        <div
          className="form-group"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* {!loading ? ( */}
            <>
              <span
                style={{
                  color: "green",
                }}
              >
                *Clicking Approve will send approved message to Students Mobile
                No.
              </span>
              <input
                type="button"
                value="Approve"
                // onClick={Approved}
                className="btn btn-success"
                style={{
                  width: "100px",
                }}
              />
            </>
          {/* ) : (
            <Vortex />
          )} */}
        </div>
        <div className="form-section">
          <div className="section-title">Personal Information</div>
          <div className="form-grid">
            <div>
              <label htmlFor="student-name">Name of the Student</label>
              <input
                type="text"
                id="student-name"
                name="student-name"
                value={props.form.name}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="DOB">DOB</label>
              <input
                type="text"
                id="DOB"
                name="DOB"
                readOnly
                value={props.form.DOB}
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile Number</label>
              <input
                value={props.form.mobile}
                type="text"
                id="mobile"
                name="mobile"
                readOnly
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email </label>
              <input
                value={props.form.email}
                type="email"
                id="email"
                readOnly
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                value={props.form.address}
                type="text"
                id="address"
                name="address"
                required
                readOnly
              />
            </div>
            <div>
              <label htmlFor="aadhar">Aadhar No.</label>
              <input
                value={props.form.aadhar}
                type="text"
                id="aadhar"
                name="aadhar"
                readOnly
                required
              />
            </div>

            <div>
              <label htmlFor="caste">Caste</label>
              <input
                value={props.form.caste}
                type="text"
                id="caste"
                name="caste"
                readOnly
                required
              />
            </div>

            <div>
              <label htmlFor="previousMarks">Previous Term Marks</label>
              <input
                value={props.form.previousMarks}
                type="text"
                id="previousMarks"
                name="previousMarks"
                readOnly
                required
              />
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="section-title">Academic Details</div>
          <div className="form-grid">
            <div>
              <label>StudentId</label>
              <input type="text" readOnly value={props.form.studentId} />
            </div>
            <div>
              <label>Program</label>
              <input type="text" readOnly value={props.form.program} />
            </div>
            <div>
              <label>Course Fee</label>
              <input type="text" readOnly value={props.form.courseFee} />
            </div>
            <div>
              <label>Fee Receipt</label>
              <img
                src={props.form.feeReceipt}
                alt="Fee Receipt- user didn't provided document in .png,.jpg,.jpeg format"
                width={300}
                height={300}
                readOnly
              />
            </div>
            <div>
              <label>Previous Terms Marks</label>
              <input type="text" readOnly value={props.form.previousMarks} />
            </div>
            <div>
              <label>Curriculor</label>
              <input type="text" readOnly value={props.form.curricular} />
            </div>
          </div>
        </div>
        {/* Parent Information Section */}
        <div className="form-section">
          <div className="section-title">Parent Information</div>
          <div className="form-grid">
            <div>
              <label htmlFor="father-occupation">Father's Occupation</label>
              <input
                type="text"
                id="father-occupation"
                name="father-occupation"
                required
                readOnly
                value={props.form.fatherOcc}
              />
            </div>
            <div>
              <label htmlFor="mother-occupation">Mother's Occupation</label>
              <input
                type="text"
                id="mother-occupation"
                readOnly
                name="mother-occupation"
                required
                value={props.form.motherOcc}
              />
            </div>
            <div>
              <label htmlFor="income">Income</label>
              <input
                value={props.form.Income}
                type="text"
                readOnly
                id="income"
                name="income"
                required
              />
            </div>
            <div>
              <label htmlFor="income-certificate">Income Certificate</label>
              <img
                src={props.form.IncomeUpload}
                alt="Income Doc- user didn't provided document in .png,.jpg,.jpeg format"
                readOnly
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        {/* Scholarship/Freeship Section */}
        <div className="form-section">
          <div className="section-title">Scholarship/Freeship Information</div>
          <div className="form-grid">
            <div>
              <label htmlFor="scholarship-applied">
                Have you applied for any Freeship/Scholarship?
              </label>
              <input value={props.form.OtherFoS} readOnly />
            </div>
            <div>
              <label htmlFor="scholarship-details">
                If yes, which scholarship have you applied for?
              </label>
              <input value={props.form.OtherFoSyes} readOnly />
            </div>
            <div>
              <label htmlFor="financial-assistance">
                Are you receiving any financial assistance from any other
                source?
              </label>
              <input value={props.form.financeAssist} readOnly />
            </div>
          </div>
        </div>
        {/* Bank Details Section */}
        <div className="form-section">
          <div className="section-title">Bank Details</div>
          <div className="form-grid">
            <div>
              <label htmlFor="bank-name">Bank Name</label>
              <input
                value={props.form.bankName}
                type="text"
                id="bank-name"
                name="bank-name"
                readOnly
                required
              />
            </div>
            <div>
              <label htmlFor="account-name">Account Name</label>
              <input
                type="text"
                id="account-name"
                name="account-name"
                readOnly
                required
                value={props.form.bankAccNo}
              />
            </div>
            <div>
              <label htmlFor="ifsc-code">IFSC Code</label>
              <input
                value={props.form.bankIFSC}
                type="text"
                id="ifsc-code"
                name="ifsc-code"
                required
                readOnly
              />
            </div>
            <div>
              <label htmlFor="bank-address">Bank Branch</label>
              <input value={props.form.bankBranch} />
            </div>
            <div>
              <label htmlFor="bank-document">Bank Document</label>
              <img
                src={props.form.bankUpload}
                alt="Income Doc- user didn't provided document in .png,.jpg,.jpeg format"
                readOnly
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        {/* Recommendations Section */}
        <div className="form-section">
          <div className="section-title">Recommendations</div>
          <div className="form-grid">
            <div>
              <label htmlFor="hod-recommendation">
                Recommendation from HOD
              </label>
              <input readOnly value={props.form.ReHOD || "none"} />
            </div>
            <div>
              <label htmlFor="VP-recommendation">
                Recommendation from Vice Principal
              </label>
              <input readOnly value={props.form.ReVP || "none"} />
            </div>
            <div>
              <label htmlFor="director-recommendation">
                Recommendation from Director/Principal
              </label>
              <input readOnly value={props.form.ReDoP || "none"} />
            </div>
          </div>
        </div>
        {/* Attendance Section */}
        <div className="form-section">
          <div className="section-title">Attendance</div>
          <div className="form-grid">
            <div>
              <label htmlFor="attendance-1-month">Attendance of 1 Month</label>
              <input
                type="text"
                id="attendance-1-month"
                name="attendance-1-month"
                required
                readOnly
                value={props.form.attendance1}
              />
            </div>
            <div>
              <label htmlFor="attendance-2-months">
                Attendance at Least 2 Months
              </label>
              <input
                type="text"
                id="attendance-2-months"
                readOnly
                name="attendance-2-months"
                required
                value={props.form.attendance2}
              />
            </div>
          </div>
        </div>
        {/* Miscellaneous Documents Section */}
        <div className="form-section">
          <div className="section-title">Documents</div>
          <div className="form-grid">
            <div>
              <label htmlFor="electric-bill">Electric Bill</label>
              <img
                src={props.form.eleBill}
                alt="Electric Bill- user didn't provided document in .png,.jpg,.jpeg format"
                width={300}
                height={300}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="photo">Photo</label>
              <img
                src={props.form.photo}
                alt="Photo- user didn't provided document in .png,.jpg,.jpeg format"
                width={300}
                height={300}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="signature">Signature</label>
              <img
                src={props.form.sign}
                alt="Signature- user didn't provided document in .png,.jpg,.jpeg format"
                width={300}
                height={300}
                readOnly
              />
            </div>
          </div>
        </div>
        <div
          className="form-group"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <input
            type="button"
            className="btn btn-success"
            value="Approve"
            style={{
              width: "100px",
            }}
          />
        </div>
      </form>
    </div>
  );
}
