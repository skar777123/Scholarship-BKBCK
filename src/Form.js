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
  const Maincourse = year + " " + program;
  const [courseFee, setCourseFee] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [address, setAddress] = useState("");
  const [studentid, setStudentid] = useState("");
  const [curriculum, setCurriculum] = useState("");
  const [curriculumJustification, setCurriculumJustification] = useState("");
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
  const [photo, setPhoto] = useState("");
  const [sign, setSign] = useState("");
  const [mainLoader, setMainLoader] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [loader3, setLoader3] = useState(false);
  const [loader4, setLoader4] = useState(false);
  const [loader5, setLoader5] = useState(false);
  const [loader6, setLoader6] = useState(false);

  const handleSubmit = async (e) => {
    setMainLoader(true);
    e.preventDefault();
    await axios
      .post("/form/Scholorship", {
        name: name,
        program: Maincourse,
        courseFee: courseFee,
        feeReceipt: feeReceipt,
        DOB: dateofbirth,
        studentId: studentid,
        previousMarks: previousMarks,
        curricular: curriculum + " - " + curriculumJustification,
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
        photo: photo,
        sign: sign,
      })
      .then((res) => {
        alert("Submited Succcessfully");
        setMainLoader(false);
      })
      .catch((err) => alert("Server Occupied Try Later" + err.message));
  };
  return (
    <div className="container">
      <h1>
        Scholarship to the Needy and Deserving Students <br />
        <span style={{ color: "red", fontSize: 17 }}>
          * marked are compulsory
        </span>{" "}
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Details Section */}
        <div className="form-section">
          <div className="section-title">Personal Information</div>
          <div className="form-grid">
            <div>
              <label htmlFor="student-name">
                Name of the Student <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="DOB">
                DOB <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="mobile">
                Mobile Number <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                required
                placeholder="Mobile number"
                value={mobileno}
                onChange={(e) => {
                  setMobileno(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="email">
                Email <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="address">
                Address <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="aadhar">
                Aadhar No. <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="caste">
                Caste <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
                <option value="OPEN">OPEN</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="section-title">Academic Details</div>
          <div className="form-grid">
            <div>
              <label htmlFor="student-id">
                Student ID <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="department">
                Program <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <select
                required
                name="department"
                id="department"
                onChange={(e) => {
                  setProgram(e.target.value);
                }}
              >
                <option value="">Select Program</option>
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
              <label htmlFor="course-class">
                Academic Year <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <select
                name="year"
                placeholder="Select Year"
                required
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              >
                <option value=""> Select Year </option>
                <option value="FY">FY</option>
                <option value="SY">SY</option>
                <option value="TY">TY</option>
                <option value="Part 1">Part 1</option>
                <option value="Part 2">Part 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="course-fees">
                Course Fees <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="previousMarks">
                Previous Term Marks <span style={{ color: "red" }}>*</span>{" "}
                <br />
                {year === "FY" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 13,
                    }}
                  >
                    Input your 12th Percentage
                  </span>
                ) : (
                  <></>
                )}
                {year === "SY" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 13,
                    }}
                  >
                    Input your Sem-2 Grade
                  </span>
                ) : (
                  <></>
                )}
                {year === "TY" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 13,
                    }}
                  >
                    Input your Sem-4 Grade
                  </span>
                ) : (
                  <></>
                )}
                {year === "Part 1" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 13,
                    }}
                  >
                    Input your Graduation Grade
                  </span>
                ) : (
                  <></>
                )}
                {year === "Part 2" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 13,
                    }}
                  >
                    Input your Part-1 Sem-2 Grade
                  </span>
                ) : (
                  <></>
                )}
              </label>
              <input
                type="text"
                id="previousMarks"
                name="previousMarks"
                placeholder="Enter you Marks"
                required
                value={previousMarks}
                onChange={(e) => {
                  setPreviousMarks(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="mobile">
                Curriculor/ Co.Curriculor / Extra Curriculor{" "}
              </label>
              <select
                placeholder="Enter Curriculor"
                name="curriculor"
                value={curriculum}
                onChange={(e) => {
                  setCurriculum(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Curriculor
                </option>
                <option value="NSS">NSS</option>
                <option value="NCC">NCC</option>
                <option value="Sports">Sports</option>
                <option value="Rotract">Rotract</option>
                <option value="Other">Other</option>
              </select>
              {curriculum === "" ? (
                <></>
              ) : (
                <input
                  type="text"
                  placeholder="Justify your contribution in the Curriculor"
                  onChange={(e) => {
                    setCurriculumJustification(e.target.value);
                  }}
                />
              )}
            </div>
          </div>
        </div>
        {/* Parent Information Section */}
        <div className="form-section">
          <div className="section-title">Parent Information</div>
          <div className="form-grid">
            <div>
              <label htmlFor="father-occupation">
                Father's Occupation <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="mother-occupation">
                Mother's Occupation <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="income">
                Income <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <select
                required
                value={income}
                onChange={(e) => {
                  setIncome(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select the income
                </option>
                <option value="0 to 50000">0 to 50000</option>
                <option value="50000 to 1 Lakh">50000 to 1 Lakh</option>
                <option value="1 lakh to 2.5 lakh">1 lakh to 2.5 Lakh</option>
                <option value="2.5 lakh to 5 lakh">2.5 lakh to 5 Lakh</option>
                <option value="5 lakh above">5 Lakh above</option>
              </select>
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
                Have you applied for any Freeship/Scholarship?{" "}
                <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <select
                value={applyforscholarshipfreeship}
                onChange={(e) => {
                  setApplyforscholarshipfreeship(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Below
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor="scholarship-details">
                If yes, which scholarship have you applied for?
              </label>
              <input
                type="text"
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
              <label htmlFor="bank-name">
                Bank Name <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="account-name">
                Account No. <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="ifsc-code">
                IFSC Code <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="bank-branch">
                Bank Branch <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
              <label htmlFor="bank-address">
                Bank Address <span style={{ color: "red" }}>*</span>{" "}
              </label>
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
                month <span style={{ color: "red" }}>*</span>{" "}
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
                month <span style={{ color: "red" }}>*</span>{" "}
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
          <div className="section-title">
            Documents{" "}
            <span style={{ fontStyle: "italic", fontSize: 13 }}>
              [ Upload Image ]
            </span>
          </div>
          <div className="form-grid">
            <div>
              <label htmlFor="electric-bill">
                Electricity Bill <span style={{ color: "red" }}>*</span>{" "}
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
            <div>
              <label htmlFor="photo">
                Photo <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <input
                type="file"
                required
                accept="image/*"
                onChange={async (e) => {
                  setLoader5(true);
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
                  setPhoto(cloudData.url);
                  setLoader5(false);
                }}
              />
              {loader5 ? <Vortex /> : <></>}
            </div>
            <div>
              <label htmlFor="signature">
                Signature <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <input
                type="file"
                required
                accept="image/*"
                onChange={async (e) => {
                  setLoader6(true);
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
                  setSign(cloudData.url);
                  setLoader6(false);
                }}
              />
              {loader6 ? <Vortex /> : <></>}
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
