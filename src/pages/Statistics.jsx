import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "../components/Select";
import NextBack from "../components/NextBack";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import DougChart from "../components/charts/DougChart";
import LineChart from "../components/charts/LineChart"
import {
  genders,
  getFemale,
  getMale,
  getGenderless,
  getNull,
  unknownStatus,
  deadStatus,
  aliveStatus,
} from "../data";

const Statistics = () => {
  
  const [useTotal, setTotal] = useState(Number(0));
  const [useGenders, setGenders] = useState([]);
  const [genderData, setGenderData] = useState([])
  const [useMale, setMale] = useState(0);
  const [useFemale, setFemale] = useState(0);
  const [useGenderless, setGenderless] = useState(0);
  const [useUnknown, setUnknown] = useState(0);
  const [useDeadStatus, setDeadStatus] = useState(0);
  const [useAliveStatus, setAliveStatus] = useState(0);
  const [useNullStatus, setUnknownStatus] = useState(0);
  const [count, setCount] = useState(1);
  const [useEpisodes, setEpisodes]=useState([])
  const [useCharacters, setCharacters] = useState([]);
  const [statusCount, setStatusCount] = useState([])
  //First charts DATA
  const [useData, setUseData] = useState({
    labels: ["Male"],
    datasets: [
      {
        label: "Amount - Gender",
        data: [],
        backgroundColor: [],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  //second chart DATA
  const [useStatus, setStatus] = useState({
    labels: [],
    datasets: [
      {
        label: "Amount - Status",
        data: [123, 455],
        backgroundColor: [
          "rgb(101,163,13)",
          "rgba(85, 137, 11, 0.709)",
          "rgb(190, 249, 106)",
          "rgb(26, 44, 1)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  //thrid chart DATA 
  const [episodeData, setEpisodeData] = useState({
    labels: statusCount.map((data)=>data.status),
    datasets: [
      {
        label: "Total",
        data: statusCount.map((data)=>data.amount),
        backgroundColor: [
          "rgb(101,163,13)",
          "rgb(26, 44, 1)"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  //data creation for the genders chart
 console.log('gender',genderData)
   useEffect(()=>{
    const gendersCount = useGenders.map((character)=>character.gender)
    const data = new Set(gendersCount)
    const result = [...data]
    setGenderData(result)
  },[useGenders])

  //Data creation for the episode Chart
  useEffect(()=>{
    const statusObject = [
      {
        status: 'Alive', 
        amount: 0
      },
      {
        status: 'Dead', 
        amount: 0
    }
    ]
  let statusArray = useCharacters.map((character)=>character.data.status)
  statusArray.map((status)=>{
    if(status ==='Alive'){
      statusObject[0].amount++
    } else if(status === 'Dead')
      statusObject[1].amount++
  })
  setStatusCount(statusObject)
  },[useCharacters])

  //API REQUEST EPISODES
  let episodeApi = `https://rickandmortyapi.com/api/episode/${count}`;
  useEffect(() => {
    async function getEpisodes() {
      try {
        const result = await axios.get(episodeApi);
        setEpisodes(result.data);
        if (result) {
          const residents = await Promise.all(
            result.data.characters.map((character) => {
              return axios.get(character);
            })
          );
          setCharacters(residents);
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    getEpisodes();
  }, [episodeApi]);


  //API counts
  useEffect(() => {

    const gender = async () => {
      const count = await genders();
      setGenders(count);
    };

    const female = async () => {
      const count = await getFemale();
      setFemale(count);
    };

    const male = async () => {
      const count = await getMale();
      setMale(count);
    };

    const genderless = async () => {
      const count = await getGenderless();
      setGenderless(count);
    };

    const nule = async () => {
      const count = await getNull();
      setUnknown(count);
    };

    const dead = async () => {
      const count = await deadStatus();
      setDeadStatus(count);
    };

    const alive = async () => {
      const count = await aliveStatus();
      setAliveStatus(count);
    };

    const unknown = async () => {
      const count = await unknownStatus();
      setUnknownStatus(count);
    };

    //gender denominations
    gender();
    nule();
    genderless();
    female();
    male();
    //Status of characters
    unknown();
    alive();
    dead();
  }, []);

  //gender
  useEffect(() => {
    const useData = {
      labels: genderData,
      datasets: [
        {
          label: "Total",
          data: [useMale, useFemale, useGenderless, useUnknown],
          backgroundColor: [
            "rgb(101,163,13)",
            "rgba(85, 137, 11, 0.709)",
            "rgb(190, 249, 106)",
            "rgb(26, 44, 1)",
            "lime",
          ],
          borderColor: "rgb(5, 132, 5)",
          borderWidth: 2,
        },
      ],
    };
    setTotal(Number(useMale + useUnknown + useFemale + useGenderless));
    setUseData(useData);
  }, [useMale, useFemale, useGenderless, useUnknown, genderData]);

  //status
  useEffect(() => {
    const statusData = {
      labels: ["Alive", "Dead", "Unknown"],
      datasets: [
        {
          label: "Total",
          data: [useAliveStatus, useDeadStatus, useNullStatus],
          backgroundColor: [
            "rgb(29,78,216)",
            "rgb(186, 0, 0)",
            "rgb(33, 33, 33)",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
    setStatus(statusData);
  }, [useAliveStatus, useDeadStatus, useNullStatus]);

  //episodes
  useEffect(()=>{
    const barData = {
      labels: statusCount.map((data)=>data.status),
    datasets: [
      {
        label: 'Data',
        data: statusCount.map((data)=>data.amount),
        backgroundColor: [
          "rgb(29,78,216)",
          "rgb(186, 0, 0)"
        ],
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 2,
      },
    ],
    }
    setEpisodeData(barData)
  },[statusCount])

  return (
    <div className=" bg-black overflow-hidden h-full">
      <header className=" p-10 text-center font-creep">
        <h2 className=" font-medium text-4xl text-lime-600 mb-3">Statistics</h2>
        <h3 className=" font-medium text-2xl text-lime-600">
          This is some relevant data about the rick and morty characters
        </h3>
      </header>
      <section className="px-5 mb-10">
        <h4 className="font-2xl py-2 text-lime-700 font-lato mb-5 border-b-2 border-lime-900">
          Currently the show counts with {useTotal} characters that belong to
          the following gender denominations:
        </h4>
        <div className="  pb-5 grid max-sm:grid-cols-1 grid-cols-2">
          <figure className="lg:px-20 mb-20">
            <PieChart chartData={useData} />
          </figure>
          <figure className="lg:px-10 ">
            <label
              className=" text-center mb-5 text-xl font-lato text-lime-700"
              type="text"
            >
              Line-Chart Graphic
            </label>
            <LineChart chartData={useData} />
          </figure>
        </div>
        <h4 className="font-2xl py-2 text-lime-700 font-lato mb-5 border-b-2 border-lime-900">
          Real-time comparison of dead vs alive characters:
        </h4>
        <div className="grid grid-cols-1  lg:px-80">
          <figure>
            <DougChart chartData={useStatus} />
          </figure>
        </div>
      </section>
      <section className="px-5 pb-10">
        <h4 className="font-2xl py-2 text-lime-700 font-lato  border-b-2 border-lime-900">
          Mortality graph for all the episodes based on the final status of the characters by the end of each episode:
        </h4>
        <nav className="px-10 sm:flex sm:justify-between sm:space-x-10 mb-5 items-center mt-5">
          <div className="w-90% max-sm:mb-2">
            <Select setCount={setCount} text={"Episode"} total={51} />
          </div>
          <NextBack count={count} setCount={setCount} useNewCount={51} />
        </nav>
        <>
          <ul className="  p-3 items-center  text-center lg:flex lg:justify-around font-bold bg-lime-500 rounded-xl overflow-hidden text-xl  font-lato mb-7">
            <li>Name:</li>
            <span className=" text-4xl text-gray-800">{useEpisodes.name}</span>
            <li>Air Date:</li>
            <span className="text-xl max-sm:text-2xl text-gray-800">
              {useEpisodes.air_date}
            </span>
            <li>Episode Code:</li>
            <span className="text-xl max-sm:text-2xl text-gray-800">
              {useEpisodes.episode}
            </span>
          </ul>
        </>
        <figure className="lg:px-80">
            <label
              className=" text-center mb-5 text-xl font-lato text-lime-700"
              type="text"
            >
              Bar-Chart Graphic
            </label>
            <BarChart chartData={episodeData} />
          </figure>
      </section>
    </div>
  );
};

export default Statistics;
