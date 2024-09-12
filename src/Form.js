import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { Vortex } from "react-loader-spinner";

const Form = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const att1 = month[d.getMonth() - 2];
  const att2 = month[d.getMonth() - 1];
  const [name, setFullname] = useState("");
  const [emailId, setEmailId] = useState("");
  const [program, setProgram] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [year, setYear] = useState("");
  let Maincourse = year + " " + program;
  const [courseFee, setCourseFee] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [address, setAddress] = useState("");
  const [studentid, setStudentid] = useState("");
  const [curriculum, setCurriculum] = useState("");
  const [applyforscholarshipfreeship, setApplyforscholarshipfreeship] =
    useState("");
  const [aadhar, setAadhar] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountno, setAccountno] = useState("");
  const [ifsccode, setIfsccode] = useState("");
  const [branch, setBranch] = useState("");
  const [bankAddress, setBankAdress] = useState("");
  const [caste, setCaste] = useState("");
  const [previousMarks, setPreviousMarks] = useState("");
  const [fatherOcc, setFatherOcc] = useState("");
  const [motherOcc, setMotherOcc] = useState("");
  const [income, setIncome] = useState("");
  const [incomeUpload, setIncomeUpload] = useState("");
  const [bankUpload, setBankUpload] = useState("");
  const [reHOD, setReHOD] = useState("");
  const [reDoP, setReDoP] = useState("");
  const [attendance1, setAttendance1] = useState("");
  const [attendance2, setAttendance2] = useState("");
  const [eleBill, setEleBill] = useState("");
  const [ifyesApplied, setIfyesApplied] = useState("");
  const [financialAssist, setFinancialAssist] = useState("");
  const [feeReceipt, setFeeReceipt] = useState("");
  const [reVP, setReVp] = useState("");
  const [mainLoader, setMainLoader] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [loader3, setLoader3] = useState(false);
  const [loader4, setLoader4] = useState(false);

  const handleSubmit = async (e) => {
      setMainLoader(true);
      e.preventDefault();
      await axios
        .post("/form/Scholorship", {
          name: name,
          program: program,
          courseFee: courseFee,
          feeReceipt: feeReceipt,
          DOB: dateofbirth,
          studentId: studentid,
          previousMarks: previousMarks,
          curricular: curriculum,
          mobile: mobileno,
          email: emailId,
          address: address,
          aadhar: aadhar,
          caste: caste,
          fatherOcc: fatherOcc,
          motherOcc: motherOcc,
          Income: income,
          IncomeUpload: incomeUpload,
          OtherFoS: applyforscholarshipfreeship,
          OtherFoSyes: ifyesApplied,
          financeAssist: financialAssist,
          bankName: bankName,
          bankAccNo: accountno,
          bankIFSC: ifsccode,
          bankBranch: branch,
          bankUpload: bankUpload,
          ReHOD: reHOD,
          ReVP: reVP,
          ReDoP: reDoP,
          attendance1: attendance1,
          attendance2: attendance2,
          eleBill: eleBill,
        })
        .then((res) => {
          alert("Submited Succcessfully");
          setMainLoader(false);
        })
        .catch((err) => alert("Server Occupied Try Later" + err.message ));
    
  };
  return (
    <div className="container">
      <h1>
        Scholarship to the Needy and Deserving Students {"        "}{" "}
        <span style={{ color: "red" }}>[All Fields are required]</span>{" "}
      </h1>
      <form onSubmit={handleSubmit}>
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
                value={name}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                required
                placeholder="Enter your Name"
              />
            </div>
            <div>
              <label htmlFor="DOB">DOB</label>
              <input
                type="date"
                id="DOB"
                name="DOB"
                value={dateofbirth}
                onChange={(e) => {
                  setDateofbirth(e.target.value);
                }}
                required
                placeholder="Enter your Date of Birth"
              />
            </div>
            <div>
              <label htmlFor="student-id">Student ID</label>
              <input
                type="text"
                id="student-id"
                name="student-id"
                required
                value={studentid}
                onChange={(e) => {
                  setStudentid(e.target.value);
                }}
                placeholder="Enter your Student ID"
              />
            </div>

            <div>
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                required
                placeholder="mobile number"
                value={mobileno}
                onChange={(e) => {
                  setMobileno(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="department">Program</label>
              <select
                required
                name="department"
                id="department"
                onChange={(e) => {
                  setProgram(e.target.value);
                }}
              >
                <option value="">Select your Department</option>
                <option value="B.A. Hindi">B.A. Hindi</option>
                <option value="B.A. Marathi">B.A. Marathi</option>
                <option value="B.A. English">B.A. English</option>
                <option value="B.A. Economics">B.A. Economics</option>
                <option value="B.A. Geography">B.A. Geography</option>
                <option value="B.A. Political Science">
                  B.A. Political Science
                </option>
                <option value="B.A. History">B.A. Histroy</option>
                <option value="B.A. Philosophy">B.A. Philosophy</option>
                <option value="B.A.M.M.C">B.A.M.M.C</option>
                <option value="B.Sc. Botany">B.Sc. Botany</option>
                <option value="B.Sc. Chemistry">B.Sc. Chemistry</option>
                <option value="B.Sc. Physics">B.Sc. Physics</option>
                <option value="B.Sc. Mathematics">B.Sc. Mathematics</option>
                <option value="B.Sc. Microbiology">B.Sc. Microbiology</option>
                <option value="B.Sc. Zoology">B.Sc. Zoology</option>
                <option value="B.Sc. (C.S.)">B.Sc. (C.S.)</option>
                <option value="BCA">BCA</option>
                <option value="B.Sc. (I.T.)">B.Sc. (I.T.)</option>
                <option value="B.Sc. Data Science">B.Sc. Data Science</option>
                <option value="B.Sc. Biotechnology">B.Sc. Biotechnology</option>
                <option value="B.Voc. in Medical Laboratory Technology">
                  B.Voc. in Medical Laboratory Technology
                </option>
                <option value="B.Voc. in Cyber Security and Forensics">
                  B.Voc. in Cyber Security and Forensics
                </option>
                <option value="B.Voc. in Business Management and Enterpreneurial">
                  B.Voc. in Business Management and Enterpreneurial
                </option>
                <option value="B.Voc. in Financial Market and Trading Operations ">
                  B.Voc. in Financial Market and Trading Operations{" "}
                </option>
                <option value="B.Com.">B.Com.</option>
                <option value="B.Com.">B.Com.</option>
                <option value="B.M.S.">B.M.S.</option>
                <option value="B.M.S. (Retail Management)">
                  B.M.S. (Retail Management)
                </option>
                <option value="B.Com. (A&F)">B.Com. (A&F)</option>
                <option value="B.Com. (B&I)">B.Com. (B&I)</option>
                <option value="B.Com. (F.M.)">B.Com. (F.M.)</option>
                <option value="B.Com. (Management Studies)">
                  B.Com. (Management Studies)
                </option>
                <option value="B.Com. (Management Studies Logistics)">
                  B.Com. (Management Studies Logistics)
                </option>
                <option value="M.A. Hindi">M.A. Hindi</option>
                <option value="M.A. Marathi">M.A. Marathi</option>
                <option value="M.A. Business Economics">
                  M.A. Business Economics
                </option>
                <option value="M.A. Geography">M.A. Geography</option>
                <option value="M.A. Political Science">
                  M.A. Political Science
                </option>
                <option value="M.A. History">M.A. History</option>
                <option value="M.Sc. Botany">M.Sc. Botany</option>
                <option value="M.Sc. Chemistry(Organic)">
                  M.Sc. Chemistry(Organic)
                </option>
                <option value="M.Sc. Chemistry(Analytical)">
                  M.Sc. Chemistry(Analytical)
                </option>
                <option value="M.Sc. Food Science and Nutraceuticals">
                  M.Sc. Food Science and Nutraceuticals
                </option>
                <option value="M.Sc. Physics(Electronics)">
                  M.Sc. Physics(Electronics)
                </option>
                <option value="M.Sc. Physics(Materials Science/ Computational Physics)">
                  M.Sc. Physics(Materials Science/ Computational Physics)
                </option>
                <option value="M.Sc. Applied Mathematics">
                  M.Sc. Applied Mathematics
                </option>
                <option value="M.Sc. Microbiology">M.Sc. Microbiology</option>
                <option value="M.Sc. Microbiology(Industrial)">
                  M.Sc. Microbiology(Industrial)
                </option>
                <option value="M.Sc. Zoology(Endocrinology)">
                  M.Sc. Zoology(Endocrinology)
                </option>
                <option value="M.Sc. Zoology(Cell Biology and Cytogenetics)">
                  M.Sc. Zoology(Cell Biology and Cytogenetics)
                </option>
                <option value="M.Sc. (C.S.)">M.Sc. (C.S.)</option>
                <option value="M.Sc. I.T. (Cloud Computing)">
                  M.Sc. I.T. (Cloud Computing)
                </option>
                <option value="M.Sc. AI">M.Sc. AI</option>
                <option value="M.Sc. DSBDA">M.Sc. DSBDA</option>
                <option value="M.Sc. Cyber Security">
                  M.Sc. Cyber Security
                </option>
                <option value="M.Sc. BioTechnology">M.Sc. BioTechnology</option>
                <option value="M.Sc. Industrial BioTechnology">
                  M.Sc. Industrial BioTechnology
                </option>
                <option value="M.Sc. Bioanalytical Science">
                  M.Sc. Bioanalytical Science
                </option>
                <option value="M.Com. Adv. Accountancy">
                  M.Com. Adv. Accountancy
                </option>
                <option value="M.Com. Banking and Finance">
                  M.Com. Banking and Finance
                </option>
                <option value="M.Com. A&F">M.Com. A&F</option>
                <option value="M.Com. E-Commerce">M.Com. E-Commerce</option>
                <option value="M.Sc. Finance">M.Sc. Finance</option>
              </select>
            </div>
            <div>
              <label htmlFor="course-class">Academic Year</label>
              <select
                name="year"
                required
                id="year"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              >
                <option value="">Select Academic Year</option>
                <option value="FY">FY</option>
                <option value="SY">SY</option>
                <option value="TY">TY</option>
                <option value="Part 1">Part 1</option>
                <option value="Part 2">Part 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="course-fees">Course Fees</label>
              <input
                type="text"
                id="course-fees"
                placeholder="Enter Total fees"
                name="course-fees"
                required
                value={courseFee}
                onChange={(e) => {
                  setCourseFee(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="course-fees">
                Fee Receipt <span style={{ color: "red" }}>* upload image</span>
              </label>
              <input
                type="file"
                required
                accept="image/*"
                onChange={async (e) => {
                  setLoader(true);
                  const data = new FormData();
                  data.append("file", e.target.files[0]);
                  data.append("upload_preset", "SW-birla");
                  data.append("cloud_name", "dapajcd1d");

                  if (data === null) {
                    alert("upload image");
                  }

                  const res = await fetch(
                    "https://api.cloudinary.com/v1_1/dapajcd1d/image/upload",
                    {
                      method: "POST",
                      body: data,
                    }
                  );
                  const cloudData = await res.json();
                  setFeeReceipt(cloudData.url);
                  setLoader(false);
                }}
              />
              {loader ? <Vortex /> : <></>}
            </div>
            <div>
              <label htmlFor="mobile">
                Curriculor/ Co.Curriculor / Extra Curriculor{" "}
              </label>
              <input
                type="text"
                id="mobile"
                placeholder="Enter Curriculor"
                name="mobile"
                required
                value={curriculum}
                onChange={(e) => {
                  setCurriculum(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                name="email"
                required
                value={emailId}
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="aadhar">Aadhar No.</label>
              <input
                type="text"
                id="aadhar"
                placeholder="Enter aadhar no."
                name="aadhar"
                required
                value={aadhar}
                onChange={(e) => {
                  setAadhar(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your Address"
                required
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="caste">Caste</label>
              <select
                required
                name="caste"
                id="caste"
                onChange={(e) => {
                  setCaste(e.target.value);
                }}
              >
                <option value="">Select your Caste</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
                <option value="NT">NT</option>
                <option value="EWS">EWS</option>
              </select>
            </div>
            <div>
              <label htmlFor="previousMarks">Previous Term Marks</label>
              <input
                type="text"
                id="previousMarks"
                name="previousMarks"
                placeholder="Fy - Enter 12th marks || SY & TY - Enter Last Sem Marks"
                required
                value={previousMarks}
                onChange={(e) => {
                  setPreviousMarks(e.target.value);
                }}
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
                placeholder="Father's Work"
                value={fatherOcc}
                onChange={(e) => {
                  setFatherOcc(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="mother-occupation">Mother's Occupation</label>
              <input
                type="text"
                id="mother-occupation"
                name="mother-occupation"
                placeholder="Mother's Work"
                required
                value={motherOcc}
                onChange={(e) => {
                  setMotherOcc(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="income">Income</label>
              <input
                type="text"
                id="income"
                name="income"
                placeholder="Income in digits"
                required
                value={income}
                onChange={(e) => {
                  setIncome(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="income-certificate">
                Income Certificate{" "}
                <span style={{ color: "red" }}>* upload image</span>
              </label>
              <input
                type="file"
                required
                accept="image/*"
                onChange={async (e) => {
                  setLoader2(true);
                  const data = new FormData();
                  data.append("file", e.target.files[0]);
                  data.append("upload_preset", "SW-birla");
                  data.append("cloud_name", "dapajcd1d");

                  if (data === null) {
                    alert("upload image");
                  }

                  const res = await fetch(
                    "https://api.cloudinary.com/v1_1/dapajcd1d/image/upload",
                    {
                      method: "POST",
                      body: data,
                    }
                  );
                  const cloudData = await res.json();
                  setIncomeUpload(cloudData.url);
                  setLoader2(false);
                }}
              />
              {loader2 ? <Vortex /> : <></>}
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
              <input
                type="text"
                required
                placeholder="Yes or No"
                value={applyforscholarshipfreeship}
                onChange={(e) => {
                  setApplyforscholarshipfreeship(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="scholarship-details">
                If yes, which scholarship have you applied for?
              </label>
              <input
                type="text"
                required
                placeholder="Name of Scholarship you Applied"
                value={ifyesApplied}
                onChange={(e) => {
                  setIfyesApplied(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="financial-assistance">
                Are you receiving any financial assistance from any other
                source?
              </label>
              <input
                type="text"
                required
                placeholder=" Yes or No, and the Source of Assistance"
                value={financialAssist}
                onChange={(e) => {
                  setFinancialAssist(e.target.value);
                }}
              />
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
                type="text"
                id="bank-name"
                name="bank-name"
                required
                placeholder="Bank Name"
                value={bankName}
                onChange={(e) => {
                  setBankName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="account-name">Account No.</label>
              <input
                type="text"
                id="account-name"
                name="account-name"
                placeholder="Account Number"
                required
                value={accountno}
                onChange={(e) => {
                  setAccountno(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="ifsc-code">IFSC Code</label>
              <input
                type="text"
                id="ifsc-code"
                name="ifsc-code"
                placeholder="IFSC code "
                required
                value={ifsccode}
                onChange={(e) => {
                  setIfsccode(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="bank-branch">Bank Branch</label>
              <input
                type="text"
                required
                value={branch}
                placeholder="Bank Branch "
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="bank-address">Bank Address</label>
              <input
                type="text"
                placeholder="Address of the Bank"
                value={bankAddress}
                required
                onChange={(e) => {
                  setBankAdress(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="bank-document">
                Bank Passbook{" "}
                <span style={{ color: "red" }}>
                  * upload image of first page
                </span>
              </label>
              <input
                type="file"
                required
                accept="image/*"
                onChange={async (e) => {
                  setLoader3(true);
                  const data = new FormData();
                  data.append("file", e.target.files[0]);
                  data.append("upload_preset", "SW-birla");
                  data.append("cloud_name", "dapajcd1d");

                  if (data === null) {
                    alert("upload image");
                  }

                  const res = await fetch(
                    "https://api.cloudinary.com/v1_1/dapajcd1d/image/upload",
                    {
                      method: "POST",
                      body: data,
                    }
                  );
                  const cloudData = await res.json();
                  setBankUpload(cloudData.url);
                  setLoader3(false);
                }}
              />
              {loader3 ? <Vortex /> : <></>}
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
              <input
                type="text"
                placeholder="Mention the ammount"
                required
                value={reHOD}
                onChange={(e) => {
                  setReHOD(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="director-recommendation">
                Recommendation from Vice Principal
              </label>
              <input
                placeholder="Mention the ammount"
                type="text"
                required
                value={reVP}
                onChange={(e) => {
                  setReVp(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="director-recommendation">
                Recommendation from Director/Principal
              </label>
              <input
                placeholder="Mention the ammount"
                type="text"
                required
                value={reDoP}
                onChange={(e) => {
                  setReDoP(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {/* Attendance Section */}
        <div className="form-section">
          <div className="section-title">Attendance</div>
          <div className="form-grid">
            <div>
              <label htmlFor="attendance-1-month">
                Attendance of{" " + att1 + " "}
                month
              </label>
              <input
                type="text"
                id="attendance-1-month"
                name="attendance-1-month"
                required
                placeholder={"Enter " + att1 + " Attendance"}
                value={attendance1}
                onChange={(e) => {
                  setAttendance1(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="attendance-2-months">
                Attendance of{" " + att2 + " "}
                month
              </label>
              <input
                type="text"
                placeholder={"Enter " + att2 + " Attendance"}
                id="attendance-2-months"
                name="attendance-2-months"
                required
                value={attendance2}
                onChange={(e) => {
                  setAttendance2(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {/* Miscellaneous Documents Section */}
        <div className="form-section">
          <div className="section-title">Documents</div>
          <div className="form-grid">
            <div>
              <label htmlFor="electric-bill">
                Electric Bill{" "}
                <span style={{ color: "red" }}>* upload image</span>
              </label>
              <input
                type="file"
                required
                accept="image/*"
                onChange={async (e) => {
                  setLoader4(true);
                  const data = new FormData();
                  data.append("file", e.target.files[0]);
                  data.append("upload_preset", "SW-birla");
                  data.append("cloud_name", "dapajcd1d");

                  if (data === null) {
                    alert("upload image");
                  }

                  const res = await fetch(
                    "https://api.cloudinary.com/v1_1/dapajcd1d/image/upload",
                    {
                      method: "POST",
                      body: data,
                    }
                  );
                  const cloudData = await res.json();
                  setEleBill(cloudData.url);
                  setLoader4(false);
                }}
              />
              {loader4 ? <Vortex /> : <></>}
            </div>
          </div>
        </div>
        <div className="form-section">
          {mainLoader ? <Vortex /> : <></>}
          {mainLoader ? "Please Wait..." : <></>}
          <input
            type="submit"
            value="Submit"
            required
            style={{
              backgroundColor: "#1679AB",
              color: "white",
              fontWeight: "bold",
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
