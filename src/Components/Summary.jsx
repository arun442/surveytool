import React from "react";
import gklogo from '../Images/gk-logo.svg';
import aisummary from '../Images/aisummary1.webp';



export default function Summary() {

    return(
        <>
        <div style={{height:'100vh'}}>
        <div
          className="row"
          style={{
          
            height: "15vh",
            backgroundColor: "white",
            margin: 0, 
            padding:0
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
              height:'100%',
              padding:0

            }}
          >
            <img style={{width:'100%',height:'70%'}} src={gklogo}/>
          </div>
        
        </div>
        <div style={{width:'100%',backgroundColor:'',height:'100%'}} >
<img src={aisummary}  style={{width:'100%',height:'100%'}} />

<div style={{background:'black',padding:'40px',fontSize:'20px',color:'white',textAlign:'left',fontFamily: "Poppins Regular"}}>The impact of artificial intelligence on organizations is transformative, revolutionizing industries and reshaping business landscapes. In today's hyperconnected world, there is an urgency amongst companies to embrace AI. However, not every organization is fully prepared to deploy and leverage AI to its full potential. Being AI-ready requires combining six critical pillars – Strategy, Infrastructure, Data, Governance, Talent, and Culture.

See how “AI-ready” you are.</div>

<div style={{backgroundColor:'black',padding:'20px 80px'}}>
  <div style={{border:'2px solid rgb(255 255 255 / 35%)',padding:'30px',borderRadius:'15px'}}>
    <h4 style={{color:'cyan',textAlign:'start'}}>Your Score : 100</h4>
    <p style={{color:'white',textAlign:'justify',lineHeight:'1.5',fontSize:'20px',fontFamily: "Poppins revert"}}>A well-defined AI strategy is crucial for a company, as it ensures alignment of AI initiatives with business objectives and maximizes the technology's potential to drive innovation and growth. Without a strategy, companies risk ineffective AI implementations that fail to deliver the expected value.
<br/>Strategy includes resource allocation, assigned ownership, identifying the right technology and tool stack, and a plan for funding AI deployment in the long run. It also emphasizes continuous monitoring, evaluation, and adaptation.<br/>
Companies that fall into the fully prepared bracket on this front have a great level of maturity in all the aspects of strategy listed above and are at the forefront of readiness for AI adoption and integration globally from a strategy perspective. </p>
  <div class="progress bg-danger" style={{marginTop:'30px',height:'25px'}}>
  <div class="progress-bar" role="progressbar" style={{width:" 15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">ai 15%</div>
  <div class="progress-bar bg-success" role="progressbar" style={{width:" 30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">business 30%</div>
  <div class="progress-bar bg-info" role="progressbar" style={{width:" 20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">general 20%</div>
 
</div>
  </div>
 

</div>
        </div>
        </div>
        </>
    )
}
