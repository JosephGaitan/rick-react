import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/DougChart";
import PieChart from "../components/charts/PieChart";
import DougChart from "../components/charts/DougChart";
import { getFemale, getMale, getGenderless, getNull } from "../data";

const Statistics = () => {
  const [useTotal, setTotal] = useState(Number(0));
  const [useValue, setValue] = useState();
  const [useMale, setMale] = useState(0);
  const [useFemale, setFemale] = useState(0);
  const [useGenderless, setGenderless] = useState(0);
  const [useUnknown, setUnknown] = useState(0);
  const [useData, setUseData] = useState({
    labels: ["Male"],
    datasets: [
      {
        label: "Amount - Gender",
        data: [useMale],
        backgroundColor: [
          "rgb(101,163,13)",
          "lime",
          "rgba(85, 137, 11, 0.709)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const statusData ={
    labels: ["Alive", "Dead"],
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
  };

  useEffect(() => {
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

    nule();
    genderless();
    female();
    male();
  }, []);

  useEffect(() => {
    const useData = {
      labels: ["Male", "Female", "Genderless", "Unknown Gender"],
      datasets: [
        {
          label: "Amount - Gender",
          data: [useMale, useFemale, useGenderless, useUnknown],
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
    };
    setTotal(Number(useMale + useUnknown + useFemale + useGenderless));
    setUseData(useData);
  }, [useMale, useFemale, useGenderless, useUnknown]);

  return (
    <div className=" bg-black overflow-hidden h-full">
      <header className=" p-10 text-center font-creep">
        <h2 className=" font-medium text-4xl text-lime-600 mb-3">Statistics</h2>
        <h3 className=" font-medium text-2xl text-lime-600">
          These is some relevant data about the rick and morty characters
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
              Bar-Chart Graphic
            </label>
            <BarChart chartData={useData} />
          </figure>
        </div>
        <h4 className="font-2xl py-2 text-lime-700 font-lato mb-5 border-b-2 border-lime-900">
          Real-time comparison of dead vs alive characters:
        </h4>
        <div className="grid grid-cols-1 lg:px-40">
          <figure>
            <DougChart chartData={statusData} />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
