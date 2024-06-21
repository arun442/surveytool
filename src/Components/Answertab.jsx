import React, { useState, useEffect,useRef } from "react";
import "../Components/Answertab.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Answertab = () => {
  const [surveytab, setsurveytab] = useState([]);
  const [oldindex, setoldindex] = useState(0);
  const [surveyquestion, setsurveyquestion] = useState([]);
  const [currenttab, setcurrenttab] = useState();
  const [optselect, setoptselect] = useState();
  const [surveytype, setsurveytype] = useState("");
  const [timer, settimer] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();
  const questionRefs = useRef([]);
    useEffect(() => {
      console.log(Date.parse('05 sep 2023'));
      
    if (timer) {
      if (seconds === 0) {
        console.log('sur',surveyquestion);
        return;
      }
      const intervalId = setInterval(() => {
        // Increment the seconds by 1 every second
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      // Return a cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [seconds, timer]);
  const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);

  useEffect(() => {
    const config = {
      headers: { "Content-Type": "application/json"},
    };

    axios.get(`http://localhost:8080/surveytool/getsurveytype`).then((response) =>{
    console.log(response);
    // setsurveyquestion(response.data);
    });

    const survey =[
      {
          "id": 1,
          "surveyType": "quiz",
          "timeBased": true,
          "timeToComplete": 20,
          "section": [
              {
                  "sectionid": 1,
                  "tabOrder": 1,
                  "sectionDesc": "aptitude",
                  "numberOfQuestions": 10,
                  "bgColor": "#114180",
                  "color": "white"
              },
              {
                  "sectionid": 2,
                  "tabOrder": 3,
                  "sectionDesc": "logical",
                  "numberOfQuestions": 10,
                  "bgColor": " ",
                  "color": "blue"
              },
              {
                  "sectionid": 3,
                  "tabOrder": 2,
                  "sectionDesc": "technical",
                  "numberOfQuestions": 10,
                  "bgColor": " ",
                  "color": "blue"
              }
          ]
      }
  ]
    //  [
    //   {
    //     surveytype: "quiz",
    //     timebased: true,
    //     timetocomplete: 200,
    //     section: [
    //       {
    //         taborder: 1,
    //         sectiondesc: "aptitude",
    //         noofquestion: 10,
    //         bgcolor: "#114180",
    //         color: "white",
    //         dockey:'quiz1'
    //       },
    //       // {
    //       //   taborder: 3,
    //       //   sectiondesc: "Logical",
    //       //   noofquestion: 10,
    //       //   bgcolor: "",
    //       //   color: "blue",
    //       // },
    //       {
    //         taborder: 2,
    //         sectiondesc: "Technical",
    //         noofquestion: 10,
    //         bgcolor: "",
    //         color: "blue",
    //         dockey:'quiz2'
    //       },
    //     ],
    //   },
    // ];


    setsurveytype(survey[0].surveyType);
    settimer(survey[0].timeBased);
    setSeconds(survey[0].timeToComplete);
    setsurveytab(survey[0].section.sort((a, b) => a.taborder - b.taborder));
    const updatesurvey = survey[0].section.sort(
      (a, b) => a.tabOrder - b.tabOrder
    );
    const surveyques =
     [
      {
        aptitude: [
          {
            questionno: 1,
            questiontype: "text",
            imgurl:
              "data:image/jpeg;base64,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",
            question:
              "Which programming languages do you use regularly in your work?",
            answertype: "choice",
            options: [
              {
                optid: "optionfirst",
                opttext: "option1 ",
              },
              {
                optid: "optionsecond",
                opttext: "option2",
              },
              {
                optid: 3,
                opttext: "option3",
              },
              {
                optid: 4,
                opttext: "option4",
              },
            ],
            minselect: 1,
            points: 1,
            useranswer: [],
          },
          {
            questionno: 2,
            questiontype: "text",
            imgurl: "",
            question:
              "An important step is to review the job description to determine what you need to study. This may involve learning data structures, coding in a specific language, or using business intelligence tools.",
            answertype: "fill",
            options: [],
            minselect: 1,
            points: 5,
            useranswer: [],
          },
          {
            questionno: 3,
            questiontype: "text",
            imgurl: "",
            question:
              "Explain your approach to solving problems and logical reasoning. This points out your problem-solving and critical thinking abilities to a hiring manager.",
            answertype: "multiplechoice",
            options: [
              {
                optid: 1,
                opttext: "option1",
              },
              {
                optid: 2,
                opttext: "option2",
              },
              {
                optid: 3,
                opttext: "option3",
              },
              {
                optid: 4,
                opttext: "option4",
              },
            ],
            minselect: 2,
            points: 1,
            useranswer: [],
          },
        ],
        logical: [
          {
            questionno: 1,
            questiontype: "text",
            imgurl:
              "data:image/jpeg;base64,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",
            question: "logical tab",
            answertype: "choice",
            options: [
              {
                optid: 1,
                opttext: "option1",
              },
              {
                optid: 2,
                opttext: "option2",
              },
              {
                optid: 3,
                opttext: "option3",
              },
              {
                optid: 4,
                opttext: "option4",
              },
            ],
            minselect: 1,
            points: 7,
            useranswer: [],
          },
          {
            questionno: 2,
            questiontype: "text",
            imgurl: "",
            question: "",
            answertype: "multiplechoice",
            options: [
              {
                optid: 1,
                opttext: "option1",
              },
              {
                optid: 2,
                opttext: "option2",
              },
              {
                optid: 3,
                opttext: "option3",
              },
              {
                optid: 4,
                opttext: "option4",
              },
            ],
            minselect: 2,
            points: 1,
            useranswer: [],
          },
          {
            questionno: 3,
            questiontype: "text",
            imgurl: "",
            question: "select the twice option",
            answertype: "multiplechoice",
            options: [
              {
                optid: 1,
                opttext: "option1",
              },
              {
                optid: 2,
                opttext: "option2",
              },
              {
                optid: 3,
                opttext: "option3",
              },
              {
                optid: 4,
                opttext: "option4",
              },
            ],
            minselect: 2,
            points: 1,
            useranswer: [],
          },
          {
            questionno: 4,
            questiontype: "text",
            imgurl: "",
            question:
              "which one is your hobby Hazer Auto Parts uses a reasoning quiz as part of their job application process. The quiz consists of 34 questions in total and the questions do get a bit trickier as you go on. They consist of questions that require basic knowledge of logic and physics. However, there are also some math questions towards the end of the quiz. The template used for the quiz is minimal and simple and uses Hazer’s brand colors. ",
            answertype: "fill",
            options: [],
            minselect: 0,
            points: 1,
            useranswer: [],
          },
        ],
        technical: [
          {
            questionno: 1,
            questiontype: "text",
            imgurl:
              "https://globalknowledgetechnologies-my.sharepoint.com/personal/pavankumar_silverlake_co_in/Documents/public%20access/sage.png",
            question: "technical tab",
            answertype: "choice",
            options: [
              {
                optid: 1,
                opttext: "option1",
              },
              {
                optid: 2,
                opttext: "option2",
              },
              {
                optid: 3,
                opttext: "option3",
              },
              {
                optid: 4,
                opttext: "option4",
              },
            ],
            minselect: 1,
            points: 1,
            useranswer: [],
          },
          {
            questionno: 2,
            questiontype: "text",
            imgurl: "",
            question: "enter your company name",
            answertype: "fill",
            options: [],
            minselect: 0,
            points: 1,
            useranswer: [],
          },
          {
            questionno: 3,
            questiontype: "text",
            imgurl: "",
            question: "select 3 options",
            answertype: "multiplechoice",
            options: [
              {
                optid: 1,
                opttext: "option1",
              },
              {
                optid: 2,
                opttext: "option2",
              },
              {
                optid: 3,
                opttext: "option3",
              },
              {
                optid: 4,
                opttext: "option4",
              },
            ],
            minselect: 3,
            points: 1,
            useranswer: [],
          },
        ],
      },
    ];

    setsurveyquestion(surveyques);

    setcurrenttab(updatesurvey[0].sectionDesc);
    console.log(currenttab);
    console.log(surveytab);
  }, []);

  const opentab = (i) => {
    if (surveytab.length > 1) {
      
      questionRefs.current[0].scrollIntoView({ behavior: 'smooth' });
      console.log(surveytab);
      setcurrenttab(surveytab[i].sectionDesc);
      surveytab[oldindex].bgColor = "";
      surveytab[oldindex].color = "blue";
      const survey = [...surveytab];
      survey[i].bgColor = "#114180";
      survey[i].color = "white";
  
      setsurveytab(survey);
      setoldindex(i);
      console.log(surveytab[i].sectionDesc);
      console.log(surveyquestion);
    }
   
  };

  const setoptionsfun = (e, index) => {
    const changeopt = [...surveyquestion];
    changeopt[0][currenttab][index].useranswer = [e.target.value];
    setsurveyquestion(changeopt);
  };

  const setcheckbox = (e, index) => {
    console.log(e.target.checked);
    const changeopt = [...surveyquestion];
    console.log(changeopt[0][currenttab][index].minselect);

    console.log(changeopt[0][currenttab][index].useranswer.length);
    if (e.target.checked) {
      if (
        changeopt[0][currenttab][index].minselect >
        changeopt[0][currenttab][index].useranswer.length
      ) {
        changeopt[0][currenttab][index].useranswer.push(e.target.value);
      } else {
        e.target.checked = false;
      }
    } else {
      changeopt[0][currenttab][index].useranswer = changeopt[0][currenttab][
        index
      ].useranswer.filter((item) => item !== e.target.value);
    }

    setsurveyquestion(changeopt);
  };

  const setfillinblanks = (e, index) => {
    const changeopt = [...surveyquestion];
    changeopt[0][currenttab][index].useranswer = e.target.value;
    setsurveyquestion(changeopt);
  };

  const submitbutton = () => {

    let required = false;

    for (let i = 0; i < surveytab.length; i++) {
      for (let j = 0; j < surveyquestion.length; j++) {
        const tab=surveyquestion[0][surveytab[i].sectionDesc]

        for (let k = 0; k < tab.length; k++) {
          if (tab[k].useranswer.length>0) {
            required=true;
          }else{
            required=false;
          }
        }
      }
    }
    if(required){
      console.log('sur',surveyquestion);
      navigate('/summary')
    }else{
      // alert('answer all the questions')
      navigate('/summary')

    }
    console.log('sur',surveyquestion);

  };
  
  const navques=(index)=>{
    console.log(questionRefs)
    console.log(questionRefs.current[index]);
    questionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className="containers">
        <div
          className="row"
          style={{
            width: "100vw",
            height: "10vh",
            backgroundColor: "#114180",
            margin: 0,
          }}
        >
          <div
            className="col-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Poppins Medium",
              color: "white",
            }}
          >
            LOGO
          </div>
          <div
            className="col-10"
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Poppins Medium",
              color: "white",
            }}
          >
            {surveytype}
          </div>
        </div>
        <div
          className="row"
          style={{
            width: "100vw",
            height: "25vh",
            backgroundColor: "#F6FBFF",
            margin: 0,
          }}
        >
          <div className="col-sm-6" style={{ padding: 0 }}>
            <div className="row" style={{ paddingTop: "20px", margin: 0 }}>
              <div className="col-sm-6" style={{ padding: 0 }}>
                arunkumar{" "}
              </div>
              {timer ? (
                <div
                  className="col-sm-3"
                  style={{
                    backgroundColor: "#093063",
                    padding: 0,
                    borderRadius: "20px",
                  }}
                >
                  <div
                    style={{
                      margin: 0,
                      padding: "5px",
                      color: "white",
                      fontFamily: "Poppins Medium",
                    }}
                  >
                    Time Left {formattedTime}
                  </div>{" "}
                </div>
              ) : null}
            </div>
            <div className="row" style={{ paddingTop: "20px", margin: 0 }}>
              {surveytab.length !== 0 ? (
                <div
                  className="row"
                  style={{
                    margin: "auto",
                    width: "80%",
                    backgroundColor: "#EFEFF4",
                    borderRadius: "20px",
                    padding: 0,
                  }}
                >
                  {surveytab.map((item, index) => (
                    <div
                      key={item.taborder}
                      className="col"
                      style={{
                        backgroundColor: item.bgColor,
                        color: item.color,
                        padding: "5px",
                        borderRadius: "20px",
                        fontFamily: "Poppins Medium",
                        cursor:'pointer'
                      }}
                      onClick={(e) => opentab(index)}

                    >
                      {item.sectionDesc}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div
            className="col-sm-6"
            style={{
              height: "100%",
              paddingTop: "20px",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <div
              className="row"
              style={{ height: "fit-content", width: "100%", margin: 0 }}
            >
              <div className="col-7"
                style={{
                  height: "100%",
                  overflow: "auto",
                  paddingLeft: "20px",
                }}
              >
                {surveyquestion.length !== 0 ? (
                  <div
                    className="row"
                    style={{
                      margin: 0,
                      paddingTop: "2px",
                      borderRight: "1px solid #e3e3e3",
                    }}
                  >
                    {surveyquestion[0][currenttab].map((que, index) => (
                      <div
                        className="col-2"
                        style={{
                          padding: 0,
                          borderRadius: "50%",
                          border: "1px solid",
                          margin: "2px",
                          background:
                            que.useranswer.length > 0 ? "#FFF347" : "#FF5A00",
                          maxWidth: "30px",
                          cursor:'pointer'
                        }}
                        onClick={e=>navques(index)}
                      >
                        {que.questionno}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="col-5" style={{ padding: 0 }}>
                <div className="row" style={{ margin: "0" }}>
                  <p
                    style={{
                      backgroundColor: "#FFF347",
                      border: "1px solid",
                      borderRadius: "50%",
                      width: "30px",
                      marginBottom: "0px",
                      fontFamily: "Poppins Light",
                    }}
                  >
                    
                  </p>
                  Answered
                </div>
                <div className="row" style={{ margin: "10px 0px" }}>
                  <p
                    style={{
                      backgroundColor: "#FF5A00",
                      border: "1px solid",
                      borderRadius: "50%",
                      width: "30px",
                      margin: "0",
                    }}
                  >
                    
                  </p>
                  Not Answered
                </div>
              </div>
            </div>
            <div className="row" style={{width:'100%',display:'flex',justifyContent:'end'}}> <button className="btn btn-primary btn-sm" style={{width:'30%',marginTop:'10px'}} onClick={e=>submitbutton()}>submit</button> </div>
          </div>
        </div>

        <div className="maincontent">
          {surveyquestion.length !== 0 ? (
            <div
              className="questionpart"
              style={{ marginTop: "10px", flexGrow: 1, overflow: "scroll" }}
            >
              {surveyquestion[0][currenttab].map((que, index) => (
                <div
                  className="questionrow"
                  style={{
                    width: "80%",
                    margin: "10px auto",
                    padding: "10px",
                    border: "1px solid #e3e3e3",
                    borderRadius: "20px",
                    backgroundColor: "#FFFFFF",
                  }}
                  
                >
                  <div className="row" style={{ margin: 0 }}>
                    <div
                      className="col-1"
                      style={{
                        border: "2px solid blue",
                        color: "blue",
                        borderRadius: "20px",
                        height: "20%",
                        width: "fit-content",
                      }}
                      ref={(element) => questionRefs.current[index] = element}
                    >
                      {index+1}
                    </div>
                    <div className="col-10" style={{ textAlign: "justify" }}>
                      {que.question}
                    </div>
                  </div>
                  {que.imgurl ? (
                    <div className="row" style={{ width: "100%" }}>
                      <img
                        src={que.imgurl}
                        style={{
                          height: "200px",
                          width: "300px",
                          margin: "auto",
                        }}
                      />
                    </div>
                  ) : null}
                  {que.answertype == "choice" ? (
                    <div className="row">
                      {que.options.map((opt, optindex) => (
                        <div className="col-6" style={{ marginTop: "10px",paddingLeft:'100px',textAlign:'start' }}>
                          <input
                            type="radio"
                            style={{ transform: "scale(1.5)" }}
                            checked={
                              que.useranswer[0] ==
                              currenttab +
                                "-" +
                                que.questionno +
                                "-" +
                                opt.optid
                            }
                            value={
                              currenttab +
                              "-" +
                              que.questionno +
                              "-" +
                              opt.optid
                            }
                            name={currenttab + que.questionno}
                            onClick={(e) => setoptionsfun(e, index)}
                          />
                          <label style={{ marginLeft: "10px" }}>
                            {opt.opttext}
                          </label>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {que.answertype == "multiplechoice" ? (
                    <div className="row">
                      {que.options.map((opt, optindex) => (
                        <div className="col-6" style={{ marginTop: "10px" ,paddingLeft:'100px',textAlign:'start'}}>
                          <input
                            type="checkbox"
                            style={{ transform: "scale(1.3)" }}
                            checked={que.useranswer.includes(
                              currenttab +
                                "-" +
                                que.questionno +
                                "-" +
                                opt.optid
                            )}
                            value={
                              currenttab +
                              "-" +
                              que.questionno +
                              "-" +
                              opt.optid
                            }
                            name={currenttab + que.questionno}
                            onChange={(e) => setcheckbox(e, index)}
                          />
                          <label style={{ marginLeft: "10px" }}>
                            {opt.opttext}
                          </label>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {que.answertype == "fill" ? (
                    <div>
                      <input
                        type="text"
                        style={{
                          width: "80%",
                          border: "none",
                          borderBottom: "2px dotted",
                          margin: "30px",
                          
                        }}
                        value={que.useranswer}
                        onChange={(e) => setfillinblanks(e, index)}
                      />
                    </div>
                  ) : null}
                
                </div>
              ))}
                <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?&theme=dark&autohide=2&showinfo=0">
</iframe>

            </div>
          ) : null}
        </div>
      </div>
      
    </>
  );
};

export default Answertab;
