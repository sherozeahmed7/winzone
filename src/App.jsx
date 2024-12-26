import "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BarTitle from "./components/BarTitle";
import QueryForm from "./components/QueryForm";
import ImgSec from "./components/ImgSec";
import LatestNews from "./components/LatestNews";
import Features from "./components/Features";
import StoryPost from "./components/StoryPost";
import { FaCircleArrowRight } from "react-icons/fa6";
import img3 from "./assets/img/img3.jpg";
import img4 from "./assets/img/img4.jpg";
import img5 from "./assets/img/img5.jpg";
import img6 from "./assets/img/img6.jpg";
import img7 from "./assets/img/img7.jpg";
import img8 from "./assets/img/img8.jpg";
import img9 from "./assets/img/img9.jpg";
import Stories from "./components/Stories";
import img11 from "./assets/img/img11.jpg";
import img12 from "./assets/img/img12.jpg";
import img13 from "./assets/img/img13.jpg";
import img14 from "./assets/img/img14.jpg";
import img23 from "./assets/img/img23.jpg";
import img24 from "./assets/img/img24.jpg";
import img26 from "./assets/img/img26.jpg";
import StoriesText from "./components/StoriesText";
import CardUpdate from "./components/CardUpdate";
import MainTopics from "./components/MainTopics";
import Authors from "./components/Authors";
import Footerbottom from "./components/Footerbbottom";
import img15 from "./assets/img/img15.jpg";
import img16 from "./assets/img/img16.jpg";
import img17 from "./assets/img/img17.jpg";
import img18 from "./assets/img/img18.jpg";
import img19 from "./assets/img/img19.jpg";
import img27 from "./assets/img/img27.jpg";
import img28 from "./assets/img/img28.jpg";
import img29 from "./assets/img/img29.jpg";
import img30 from "./assets/img/img30.jpg";
import img34 from "./assets/img/img34.jpg";
import img35 from "./assets/img/img35.jpg";
import Sidebar from "./components/Sidebar";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <Navbar />

      <BarTitle />
      <QueryForm />

      <div className="d-flex flex-column flex-lg-row container">
        <ImgSec />

        <div>
          <h3
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "30px",
            }}
          >
            Latest News
          </h3>
          <span className="col-lg-7" style={{ fontSize: "medium" }}>
            <LatestNews
              imglatestNews={img3}
              time="1 hour(s) ago"
              des="#Security and WarningSystems, #EducationK-12, #MadisonWis Americas 🇺🇸 / The New York"
              tags="How Abundant Life’s Precautions ‘Helped Keep Students Safe"
            />

            <LatestNews
              imglatestNews={img23}
              time="1 minute(s) ago"
              des="#Kuiper Systems Amazoncom Inc, #Space Exploration Technologies  / The New York Times"
              tags="Jeff Bezos’ Blue Origin Ramps Up Competition with Elon Musk "
            />

            <LatestNews
              imglatestNews={img24}
              time="1 minute(s) ago"
              des=" #NewYorkCityBallet, #Magazines, #Dancing Americas 🇺🇸 / The New York Times"
              tags="Arlene Croce, Dance Critic With a Biting Wit, Dies at 90 alstoos"
            />
          </span>
        </div>
      </div>

      <div className="container d-flex  mt-5 featured-news">
        <div className="featured-title">
          <h4 className="mb-0">Featured News</h4>
        </div>
        <div className="ms-auto featured-link">
          <h6 className="mb-0 text-primary d-flex align-items-center">
            See All Trending <FaCircleArrowRight className="ms-2" />
          </h6>
        </div>
      </div>

      <div className=" container d-flex flex-column flex-lg-row">
        <Features
          imgall={img4}
          time="4 hour(s) ago"
          tags="#RussianInvasionofUkraine2022, #KurskRussia, #DefenseandMilitaryForces Europe 🇺🇦 / The New York Times"
          title="Biden Administration Running Out of Time to Send Allocated Aid to Ukraine"
          desc="Senior officials discussed U.S. plans to announce additional support for Ukraine, and spoke about casualties among North Korean troops sent to help Russia."
        />
        <Features
          imgall={img5}
          time="4 hour(s) ago"
          tags="#RepublicanParty, #CheneyLiz, #UnitedStates Politics and Government Americas 🇺🇸 / The New York Times"
          title="House Republicans Call for Liz Cheney to Be Investigated Over Jan. 6 Committee Role"
          desc="Ms. Cheney defended her work on the select committee in a detailed statement, and called the report a malicious and cowardly assault on the truth."
        />
        <Features
          imgall={img6}
          time="4 hour(s) ago"
          tags=" #Automobiles, #Japan, #NissanMotorCo Asia 🇯🇵 / The New York Times"
          title="Honda and Nissan Are in Talks to Deepen Ties and Possibly Merge"
          desc="The automakers, Japan’s second- and third-largest, are said to be discussing a tie-up that could reshape the country’s industry."
        />
      </div>

      <div className=" container d-flex flex-column flex-lg-row pb-5 ">
        <Features
          imgall={img7}
          time="4 hour(s) ago"
          tags="#LiberalPartyCanada, #TrudeauJustin, #PoliticsandGovernment Americas 🇺🇸 / The New York Times"
          title="Trump Mines Fraught Moment in Canadian Politics"
          desc="The president-elect’s threat to impose major tariffs on Canadian goods and other pointed comments have tapped into a treacherous moment in domestic politics."
        />
        <Features
          imgall={img8}
          time="4 hour(s) ago"
          tags="#RepublicanParty, #AgricultureandFarming, #UnitedStates Politics and Government Americas 🇺🇸 / The New York Times"
          title="Congressional Leaders Unveil Short-Term Spending Bill Tied to Disaster Aid"
          desc="What started out as a simple stopgap measure to avert a shutdown for a few months became a magnet for more than $100 billion in emergency disaster and farm aid, plus a host of unrelated policy measure ..."
        />
        <Features
          imgall={img9}
          time="4 hour(s) ago"
          tags="#GreenhouseGasEmissions, #GlobalWarming, #CarbonDioxide Americas 🇺🇸 / The New York Times"
          title="Worrying Signs From the Arctic"
          desc="Scientists are seeing changes that could have consequences for the whole planet."
        />
      </div>

      <StoryPost />

      <div className=" container d-flex flex-column flex-lg-row mb-5">
        <div className="pe-3 ">
          <Stories imagestory={img14} />
        </div>
        <div className="pt-5 pt-lg-0">
          <Stories imagestory={img11} />
        </div>
      </div>

      <div className=" container d-flex flex-column flex-lg-row mb-5 ">
        <div className="pe-3 ">
          <Stories imagestory={img13} />
        </div>
        <div className="pt-5 pt-lg-0">
          <Stories imagestory={img12} />
        </div>
      </div>

      <div className="d-flex container">
        <div className="col-6">
          <StoriesText />
        </div>
        <div className="col-6">
          <StoriesText />
        </div>
      </div>

      {/* <CardUpdate/> */}

      <div className="main-topics-header text-center my-4">
        <h1 className="fw-bold display-6">Main Topics</h1>

        <div className="d-flex flex-column flex-lg-row container">
          <MainTopics
            imgmaintop={img15}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
          <MainTopics
            imgmaintop={img16}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
          <MainTopics
            imgmaintop={img17}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
          <MainTopics
            imgmaintop={img18}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
        </div>

        <div className="d-flex flex-column flex-lg-row container">
          <MainTopics
            imgmaintop={img19}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
          <MainTopics
            imgmaintop={img26}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
          <MainTopics
            imgmaintop={img27}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
          <MainTopics
            imgmaintop={img28}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
        </div>

        <div className="d-flex flex-column flex-lg-row container">
          <MainTopics
            imgmaintop={img29}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
          <MainTopics
            imgmaintop={img30}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
          <MainTopics
            imgmaintop={img34}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
          <MainTopics
            imgmaintop={img35}
            tagstopics="#CustomsTariff, #ShoppingandRetail, #Olives"
            initial="7 hour(s) ago Americas 🇺🇸 / The New York Times"
            headtopics="Some of New York’s Best Pastry (and Plenty More) Is in Astoria"
          />
        </div>
      </div>

      <div className=" author pt-5 mt-5 ">
        <h1 className="fw-bold text-center">Authors</h1>
      </div>
      <div className="container">
        <div className="row">
          {/* Authors */}
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="B.C."
              authorheading="Brian X. Chen"
              authortag1="#TextMessaging"
              authortag2="#VideoRecordings"
              authortag3="#SearchEngines"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="V.F."
              authorheading="Vanessa Friedman"
              authortag1="#AxiomSpaceInc"
              authortag2="#PradaSpA"
              authortag3="#BertelliLorenzo"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="D.G."
              authorheading="Dana Goldstein"
              authortag1="#CharterSchools"
              authortag2="#AmericanFederation"
              authortag3="#National Education Assn"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="K.R."
              authorheading="Kaleigh Rogers"
              authortag1="#Deportation"
              authortag2="#FiveThirty Eightcom"
              authortag3="#Miami-DadeCountyFla"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="A.W."
              authorheading="Alex Williams"
              authortag1="#Nakayama Miho1970- 2024"
              authortag2="#PaleyAndy1951-2024"
              authortag3="#BeachBoys"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="B.P."
              authorheading="Brad Plumer"
              authortag1="#ShahJigar"
              authortag2="#BakuAzerbaijan"
              authortag3="#StiellSimon"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="A.N."
              authorheading="Amelia Nierenberg"
              authortag1="#UnitedAirlines"
              authortag2="#OxfordEngland"
              authortag3="#AngioliniElish"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="S.S."
              authorheading="Shannon Sims"
              authortag1="#AmericanRedCross"
              authortag2="#FederalAgency"
              authortag3="#GoBag"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="S.O."
              authorheading="Sharon Otterman"
              authortag1="#International Teaching"
              authortag2="#AmericanInstitute"
              authortag3="#Zionism"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="R.L."
              authorheading="Ron Lieber"
              authortag1="#Americans Abroad"
              authortag2="#ExpenseAccounts"
              authortag3="#Concur TechnologiesInc"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="A.N."
              authorheading="Adam Nossiter"
              authortag1="#AmadouHama"
              authortag2="#Niger"
              authortag3="#EuropeanParliament"
            />
          </div>
          <div className="col-12 col-lg-4 col-xl-3">
            <Authors
              logoName="J.C."
              authorheading="Jonathan O’Callaghan"
              authortag1="#UranusPlanet"
              authortag2="#NeptunePlanet"
              authortag3="#Magnetsand Magnetism"
            />
          </div>
        </div>
      </div>

      <Footerbottom />
      {/* <CustomCursor /> */}
    </>
  );
}

export default App;
