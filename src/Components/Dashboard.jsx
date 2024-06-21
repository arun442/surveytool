import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsPersonCircle } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";
import gklogo from "../Images/gk-logo.svg";
import Beginner from "../Images/Beginner.png";
import Intermediate from "../Images/Intermediate.png";
import Advance from "../Images/Advance.png";
import { Button } from "react-bootstrap";
import { IoIosArrowDropdown } from "react-icons/io";
import { GoCheckCircle } from "react-icons/go";
import { IoIosArrowDropup } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { HiMiniPlayCircle } from "react-icons/hi2";
import "../Components/Dashboard.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "./Timer";
const Dashboard = () => {
  const navigate = useNavigate();
  const [endDate, setendDate] = useState("");
  const percentage = 69;
  const progress = 66;
  const [displaycourses, setdisplaycourses] = useState(false);
  const [coursetype, setcoursetype] = useState("");

  useEffect(() => {
    setendDate(new Date("2024-01-20T00:00:00"));
  }, []);

  const viewcourse = (text) => {
    setdisplaycourses(!displaycourses);

    if (!displaycourses) {
      console.log(displaycourses);
      setcoursetype(text);
    } else {
      setcoursetype("");
      console.log(coursetype);
    }
  };

  return (
    <>
      <div
        className="row"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#F3F6F1",
          margin: 0,
          opacity: 1,
        }}
      >
        <div className="col-8" style={{ height: "100%", padding: "20px" }}>
          <div className="row" style={{ height: "12vh" }}>
            <img src={gklogo} alt="gk Logo" style={{ width: "20%" }} />
          </div>
          <div
            className="row"
            style={{
              fontFamily: "Times New Roman",
              fontWeight: "bolder",
              fontSize: "30px",
              padding: "20px",
            }}
          > Course Track  </div>
          <div  className="row" style={{ overflow: "auto", height: "65vh", padding: "10px" }} >
            {coursetype == "" || coursetype == "beginner" ? (
              <div
                className="row"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  margin: "auto",
                  marginTop: "10px",
                  borderRadius: "15px",
                }}
              >
                <div className="col-2" style={{ margin: 0, padding: 0 }}>
                  <img src={Beginner} style={{ height: "96%", width: "70%" }} />
                </div>
                <div className="col-7" style={{ margin: 0, padding: 0 }}>
                  <div
                    className="row"
                    style={{
                      margin: 0,
                      marginTop: "15px",
                      fontFamily: "Poppins Medium",
                      fontSize: "24px",
                    }}
                  >
                    Beginner
                  </div>
                  {endDate ? (
                    <div
                      className="row"
                      style={{
                        margin: 0,
                        marginTop: "8px",
                        color: "#686868",
                        fontFamily: "Poppins Regular",
                      }}
                    >
                      Time Left <CountdownTimer endDate={endDate} />
                    </div>
                  ) : null}
                </div>
                <div
                  className="col-3"
                  style={{
                    margin: 0,
                    padding: 0,
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="row" style={{ marginTop: "10px" }}>
                    <Button
                      style={{
                        backgroundColor: "#56CB82",
                        fontFamily: "Poppins Regular",
                      }}
                      onClick={(e) => viewcourse("beginner")}
                    >
                      View Courses
                      {!displaycourses ? (
                        <IoIosArrowDropdown style={{ marginLeft: "5px" }} />
                      ) : (
                        <IoIosArrowDropup style={{ marginLeft: "5px" }} />
                      )}
                    </Button>
                  </div>
                  <div className="row" style={{ marginTop: "-20px" }}>
                    <ProgressBar
                      now={progress}
                      style={{ height: "5px", padding: 0 }}
                    />
                  </div>
                </div>
                {displaycourses && coursetype == "beginner" ? (
                  <div
                    className="row"
                    style={{
                      width: "100%",
                      height: "fit-content",
                      textAlign: "end",
                    }}
                  >
                    <div className="col-10"></div>
                    <div
                      className="col-1"
                      style={{
                        padding: 0,
                        textAlign: "start",
                        fontFamily: "Poppins Light",
                      }}
                    >
                      Learned
                    </div>
                    <div
                      className="col-1"
                      style={{
                        padding: 0,
                        textAlign: "end",
                        fontFamily: "Poppins Light",
                      }}
                    >
                      Quiz
                    </div>
                  </div>
                ) : null}
                {displaycourses && coursetype == "beginner" ? (
                  <div
                    className="row"
                    id="beginner"
                    style={{ height: "40vh", overflow: "auto", margin: "auto" }}
                  >
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        backgroundColor: "#F6F6F6",
                        margin: "10px auto",
                        height: "fit-content",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{ borderRight: "1px solid #929292" }}
                      >
                        <FiExternalLink />
                      </div>
                      <div
                        className="col-9"
                        style={{
                          textAlign: "start",
                          fontFamily: "Poppins Regular",
                        }}
                      >
                        AI:Unlocking the potential of the future
                      </div>
                      <div className="col-1">
                        <GoCheckCircle
                          style={{
                            fontSize: "30px",
                            textAlign: "start",
                            padding: 0,
                            color: "#00B548",
                          }}
                        />
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{ fontSize: "30px", padding: 0 }}
                          onClick={(e) => navigate("/quiz")}
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        backgroundColor: "#F6F6F6",
                        margin: "10px auto",
                        height: "fit-content",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{ borderRight: "1px solid #929292" }}
                      >
                        <FiExternalLink />
                      </div>
                      <div
                        className="col-9"
                        style={{
                          textAlign: "start",
                          fontFamily: "Poppins Regular",
                        }}
                      > 
                        AI:Unlocking the potential of the future 
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{
                            fontSize: "30px",
                            textAlign: "start",
                            padding: 0,
                          }}
                        />
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{ fontSize: "30px", padding: 0 }}
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        backgroundColor: "#F6F6F6",
                        margin: "10px auto",
                        height: "fit-content",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{ borderRight: "1px solid #929292" }}
                      >
                        <FiExternalLink />
                      </div>
                      <div
                        className="col-9"
                        style={{
                          textAlign: "start",
                          fontFamily: "Poppins Regular",
                        }}
                      >
                        AI:Unlocking the potential of the future
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{
                            fontSize: "30px",
                            textAlign: "start",
                            padding: 0,
                          }}
                        />
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{ fontSize: "30px", padding: 0 }}
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
            {coursetype == "" || coursetype == "intermediate" ? (
              <div
                className="row"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  margin: "auto",
                  marginTop: "10px",
                  borderRadius: "15px",
                }}
              >
                <div className="col-2" style={{ margin: 0, padding: 0 }}>
                  <img
                    src={Intermediate}
                    style={{ height: "96%", width: "70%" }}
                  />
                </div>
                <div className="col-7" style={{ margin: 0, padding: 0 }}>
                  <div
                    className="row"
                    style={{
                      margin: 0,
                      marginTop: "15px",
                      fontFamily: "Poppins Medium",
                      fontSize: "24px",
                    }}
                  >
                    Intermediate
                  </div>
                  <div
                    className="row"
                    style={{
                      margin: 0,
                      marginTop: "8px",
                      color: "#686868",
                      fontFamily: "Poppins Regular",
                    }}
                  >
                    Time Left
                  </div>
                </div>
                <div
                  className="col-3"
                  style={{
                    margin: 0,
                    padding: 0,
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="row" style={{ marginTop: "10px" }}>
                    <Button
                      style={{
                        backgroundColor: "#56CB82",
                        fontFamily: "Poppins Regular",
                      }}
                      onClick={(e) => viewcourse("intermediate")}
                    >
                      View Courses
                      {!displaycourses ? (
                        <IoIosArrowDropdown style={{ marginLeft: "5px" }} />
                      ) : (
                        <IoIosArrowDropup style={{ marginLeft: "5px" }} />
                      )}{" "}
                    </Button>
                  </div>
                  <div className="row" style={{ marginTop: "-20px" }}>
                    <ProgressBar
                      now={progress}
                      style={{ height: "5px", padding: 0 }}
                    />
                  </div>
                </div>
                {displaycourses && coursetype == "intermediate" ? (
                  <div
                    className="row"
                    style={{
                      width: "100%",
                      height: "fit-content",
                      textAlign: "end",
                    }}
                  >
                    <div className="col-10"></div>
                    <div
                      className="col-1"
                      style={{
                        padding: 0,
                        textAlign: "start",
                        fontFamily: "Poppins Light",
                      }}
                    >
                      Learned
                    </div>
                    <div
                      className="col-1"
                      style={{
                        padding: 0,
                        textAlign: "end",
                        fontFamily: "Poppins Light",
                      }}
                    >
                      Quiz
                    </div>
                  </div>
                ) : null}
                {displaycourses && coursetype == "intermediate" ? (
                  <div
                    className="row"
                    id="intermediate"
                    style={{ height: "40vh", overflow: "auto", margin: "auto" }}
                  >
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        backgroundColor: "#F6F6F6",
                        margin: "10px auto",
                        height: "fit-content",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{ borderRight: "1px solid #929292" }}
                      >
                        <FiExternalLink />
                      </div>
                      <div
                        className="col-9"
                        style={{
                          textAlign: "start",
                          fontFamily: "Poppins Regular",
                        }}
                      >
                        AI:Unlocking the potential of the future intermediate
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{
                            fontSize: "30px",
                            textAlign: "start",
                            padding: 0,
                          }}
                        />
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{ fontSize: "30px", padding: 0 }}
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        backgroundColor: "#F6F6F6",
                        margin: "10px auto",
                        height: "fit-content",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{ borderRight: "1px solid #929292" }}
                      >
                        <FiExternalLink />
                      </div>
                      <div
                        className="col-9"
                        style={{
                          textAlign: "start",
                          fontFamily: "Poppins Regular",
                        }}
                      >
                        AI:Unlocking the potential of the future
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{
                            fontSize: "30px",
                            textAlign: "start",
                            padding: 0,
                          }}
                        />
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{ fontSize: "30px", padding: 0 }}
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        backgroundColor: "#F6F6F6",
                        margin: "10px auto",
                        height: "fit-content",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{ borderRight: "1px solid #929292" }}
                      >
                        <FiExternalLink />
                      </div>
                      <div
                        className="col-9"
                        style={{
                          textAlign: "start",
                          fontFamily: "Poppins Regular",
                        }}
                      >
                        AI:Unlocking the potential of the future
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{
                            fontSize: "30px",
                            textAlign: "start",
                            padding: 0,
                          }}
                        />
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{ fontSize: "30px", padding: 0 }}
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
            {coursetype == "" || coursetype == "advance" ? (
              <div
                className="row"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  margin: "auto",
                  marginTop: "10px",
                  borderRadius: "15px",
                }}
              >
                <div className="col-2" style={{ margin: 0, padding: 0 }}>
                  <img src={Advance} style={{ height: "96%", width: "70%" }} />
                </div>
                <div className="col-7" style={{ margin: 0, padding: 0 }}>
                  <div
                    className="row"
                    style={{
                      margin: 0,
                      marginTop: "15px",
                      fontFamily: "Poppins Medium",
                      fontSize: "24px",
                    }}
                  >
                    Advance
                  </div>
                  <div
                    className="row"
                    style={{
                      margin: 0,
                      marginTop: "8px",
                      color: "#686868",
                      fontFamily: "Poppins Regular",
                    }}
                  >
                    Time Left
                  </div>
                </div>
                <div
                  className="col-3"
                  style={{
                    margin: 0,
                    padding: 0,
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="row" style={{ marginTop: "10px" }}>
                    <Button
                      style={{
                        backgroundColor: "#56CB82",
                        fontFamily: "Poppins Regular",
                      }}
                      onClick={(e) => viewcourse("advance")}
                    >
                      View Courses
                      {!displaycourses ? (
                        <IoIosArrowDropdown style={{ marginLeft: "5px" }} />
                      ) : (
                        <IoIosArrowDropup style={{ marginLeft: "5px" }} />
                      )}{" "}
                    </Button>
                  </div>
                  <div className="row" style={{ marginTop: "-20px" }}>
                    <ProgressBar
                      now={progress}
                      style={{ height: "5px", padding: 0 }}
                    />
                  </div>
                </div>
                {displaycourses && coursetype == "advance" ? (
                  <div
                    className="row"
                    style={{
                      width: "100%",
                      height: "fit-content",
                      textAlign: "end",
                    }}
                  >
                    <div className="col-10"></div>
                    <div
                      className="col-1"
                      style={{
                        padding: 0,
                        textAlign: "start",
                        fontFamily: "Poppins Light",
                      }}
                    >
                      Learned
                    </div>
                    <div
                      className="col-1"
                      style={{
                        padding: 0,
                        textAlign: "end",
                        fontFamily: "Poppins Light",
                      }}
                    >
                      Quiz
                    </div>
                  </div>
                ) : null}
                {displaycourses && coursetype == "advance" ? (
                  <div
                    className="row"
                    id="advance"
                    style={{
                      height: "40vh",
                      overflow: "auto",
                      margin: "auto",
                    }}
                  >
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        backgroundColor: "#F6F6F6",
                        margin: "10px auto",
                        height: "fit-content",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{ borderRight: "1px solid #929292" }}
                      >
                        <FiExternalLink />
                      </div>
                      <div
                        className="col-9"
                        style={{
                          textAlign: "start",
                          fontFamily: "Poppins Regular",
                        }}
                      >
                        AI:Unlocking the potential of the future ADVANCE
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{
                            fontSize: "30px",
                            textAlign: "start",
                            padding: 0,
                          }}
                        />
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{ fontSize: "30px", padding: 0 }}
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        backgroundColor: "#F6F6F6",
                        margin: "10px auto",
                        height: "fit-content",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{ borderRight: "1px solid #929292" }}
                      >
                        <FiExternalLink />
                      </div>
                      <div
                        className="col-9"
                        style={{
                          textAlign: "start",
                          fontFamily: "Poppins Regular",
                        }}
                      >
                        AI:Unlocking the potential of the future
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{
                            fontSize: "30px",
                            textAlign: "start",
                            padding: 0,
                          }}
                        />
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{ fontSize: "30px", padding: 0 }}
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{
                        width: "100%",
                        backgroundColor: "#F6F6F6",
                        margin: "10px auto",
                        height: "fit-content",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{ borderRight: "1px solid #929292" }}
                      >
                        <FiExternalLink />
                      </div>
                      <div
                        className="col-9"
                        style={{
                          textAlign: "start",
                          fontFamily: "Poppins Regular",
                        }}
                      >
                        AI:Unlocking the potential of the future
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{
                            fontSize: "30px",
                            textAlign: "start",
                            padding: 0,
                          }}
                        />
                      </div>
                      <div className="col-1">
                        <HiMiniPlayCircle
                          style={{ fontSize: "30px", padding: 0 }}
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
        <div className="col-4" style={{ height: "100%", padding: "15px" }}>
          <div
            style={{
              backgroundColor: "white",
              height: "100%",
              borderRadius: "19px",
            }}
          >
            <div className="row" style={{ height: "40%", paddingTop: "20px" }}>
              <div
                style={{
                  backgroundColor: "#FCB040",
                  margin: "auto",
                  width: "50%",
                  height: "60%",
                  borderRadius: "20px",
                }}
              ></div>
              <div className="row" style={{ margin: 0 }}>
                <span
                  style={{ fontSize: "30px", fontFamily: "Poppins Regular" }}
                >
                  Arun Kumar S
                </span>
              </div>
            </div>
            <div className="row" style={{ padding: "10px", margin: 0 }}>
              <span
                style={{
                  width: "fit-content",
                  margin: "auto",
                  borderRadius: "10px",
                  backgroundColor: "#FDF0EA",
                  color: "#F6AB90",
                  fontFamily: "Poppins SemiBold",
                  height: "40px",
                  padding: "10px 30px",
                }}
              >
                Developer
              </span>
            </div>
            <div
              className="row"
              style={{
                margin: 5 + "px",
                display: "grid",
                gridTemplateColumns: "50% 50%",
                gap: "5px",
              }}
            >
              <div
                className="col-6"
                style={{
                  backgroundColor: "#F8F8FA",
                  padding: 0,
                  width: "80%",
                  margin: "auto",
                  borderRadius: "20px",
                }}
              >
                <div
                  className="row"
                  style={{
                    margin: 0,
                    padding: "10px",
                    fontFamily: "Poppins Regular",
                    color: "#777474",
                    overflowWrap: "anywhere",
                  }}
                >
                  Average%{" "}
                </div>
                <div className="row" style={{ margin: 0 }}>
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "35px",
                      marginBottom: "10px",
                    }}
                  >
                    95
                  </span>
                </div>
              </div>
              <div
                className="col-6"
                style={{
                  backgroundColor: "#F8F8FA",
                  padding: 0,
                  width: "80%",
                  margin: "auto",
                  borderRadius: "20px",
                }}
              >
                <div
                  className="row"
                  style={{
                    margin: 0,
                    padding: "10px",
                    fontFamily: "Poppins Regular",
                    color: "#777474",
                    overflowWrap: "anywhere",
                  }}
                >
                  Completion
                </div>
                <div className="row" style={{ margin: 0 }}>
                  <span
                    style={{
                      fontWeight: "bolder",
                      width: "50%",
                      height: "50%",
                      margin: "auto",
                      marginBottom: "10px",
                    }}
                  >
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        pathColor: "#56CB82",
                        textColor: "black",
                      })}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                width: "80%",
                backgroundColor: "#F8F8FA",
                borderRadius: "20px",
                padding: "10px",
                margin: "auto",
                marginTop: "10px",
                overflow: "auto",
                height: "25%",
              }}
            >
              <div
                className="row"
                style={{
                  margin: "5px 0px",
                  padding: 0,
                  backgroundColor: "#F4F4F6",
                  borderRadius: "10px",
                }}
              >
                <div className="col-2" style={{ textAlign: "end" }}>
                  <BsPersonCircle />
                </div>
                <div
                  className="col-10"
                  style={{ textAlign: "start", fontFamily: "Poppins" }}
                >
                  kannan completed quiz
                </div>
              </div>
              <div
                className="row"
                style={{
                  margin: "5px 0px",
                  padding: 0,
                  backgroundColor: "#F4F4F6",
                  borderRadius: "10px",
                }}
              >
                <div className="col-2" style={{ textAlign: "end" }}>
                  <BsPersonCircle />
                </div>
                <div
                  className="col-10"
                  style={{ textAlign: "start", fontFamily: "Poppins" }}
                >
                  arun completed quiz
                </div>
              </div>
              <div
                className="row"
                style={{
                  margin: "5px 0px",
                  padding: 0,
                  backgroundColor: "#F4F4F6",
                  borderRadius: "10px",
                }}
              >
                <div className="col-2" style={{ textAlign: "end" }}>
                  <BsPersonCircle />
                </div>
                <div
                  className="col-10"
                  style={{ textAlign: "start", fontFamily: "Poppins" }}
                >
                  kumar completed quiz
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
