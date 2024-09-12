import React from "react";
import "./Iview.css";

export default function Iview(props) {
  return (
    <div className="form-flex">
      <form>
        {/* Personal Details Section */}
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
              <label htmlFor="student-id">Student ID</label>
              <input
                type="text"
                id="student-id"
                name="student-id"
                required
                readOnly
                value={props.form.studentId}
              />
            </div>
            <div>
              <label htmlFor="department">Department</label>
              <input
                value={props.form.department}
                type="text"
                id="department"
                name="department"
                required
                readOnly
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
              <label htmlFor="course-class">Course/Class</label>
              <input
                type="text"
                id="course-class"
                name="course-class"
                required
                value={props.form.course}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="course-fees">Course Fees</label>
              <input
                value={props.form.courseFee}
                type="text"
                id="course-fees"
                name="course-fees"
                required
                readOnly
              />
            </div>
            <div>
              <label htmlFor="feeReceipt">Fee Receipt</label>
              <img
                src={props.form.feeReceipt}
                alt="Fee Receipt"
                readOnly
                width={300}
                height={300}
              />
            </div>
            <div>
              <label htmlFor="mobile">Curricular </label>
              <input
                value={props.form.curricular}
                readOnly
                type="text"
                id="mobile"
                name="mobile"
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
                alt="Income Doc"
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
              <label htmlFor="bank-address">Bank Address</label>
              <input value={props.form.bankBranch} />
            </div>
            <div>
              <label htmlFor="bank-document">Bank Document</label>
              <img
                src={props.form.bankUpload}
                alt="Income Doc"
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
              <input readOnly value={props.form.ReHOD} />
            </div>
            <div>
              <label htmlFor="VP-recommendation">
                Recommendation from Vice Principal
              </label>
              <input readOnly value={props.form.ReVP} />
            </div>
            <div>
              <label htmlFor="director-recommendation">
                Recommendation from Director/Principal
              </label>
              <input readOnly value={props.form.ReDoP} />
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
                alt="Electric Bill"
                width={300}
                height={300}
                readOnly
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
