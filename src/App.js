import { useState } from "react";
import TruckImg from "./assets/box-car.png";
import TrainImg from "./assets/train.png";

function App() {
  const [distance, setDistance] = useState("");
  const [weight, setWeight] = useState("");
  const [truckEmissions, setTruckEmissions] = useState(0);
  const [railEmissions, setRailEmissions] = useState(0);
  const truckFactor = 105;
  const railFactor = 65;

  const handleCalculation = (e) => {
    e.preventDefault();
    setTruckEmissions((truckFactor * weight * distance) / 1000000);
    setRailEmissions((railFactor * weight * distance) / 1000000);
  };

  return (
    <div className="App h-screen w-full flex flex-col justify-center items-center">
      <div className="h-fit w-fit gap-10 p-5 flex lg:flex-row flex-col justify-evenly items-center">
        <form
          onSubmit={handleCalculation}
          className="flex flex-col gap-5 h-[300px] w-[250px] p-5 rounded-lg bg-green-500 justify-between items-center"
        >
          <h1 className="font-semibold text-xl text-white">
            Emission Calculator
          </h1>
          <div className="flex flex-col">
            <label className="text-white font-medium">Weight of Cargo</label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-medium">Distance</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex w-full justify-between items-center">
            <button
              className="bg-green-700 text-white font-medium p-2 rounded-md"
              type="reset"
              onClick={() => {
                setWeight("");
                setDistance("");
              }}
            >
              Reset
            </button>
            <button className="bg-white p-2 rounded-md w-fit font-medium">
              Calculate
            </button>
          </div>
        </form>

        <div>
          {(railEmissions === "" && truckEmissions === "") ||
          (railEmissions <= 0 && truckEmissions <= 0) ? (
            <p>Fill in form to begin calculation...</p>
          ) : (
            <div className="flex flex-col gap-5">
              <p
                className={`flex justify-center items-center gap-3 ${
                  truckEmissions < railEmissions
                    ? "text-green-500"
                    : "text-red-500"
                } font-semibold text-xl`}
              >
                <img className="w-10" src={TruckImg} alt="" /> {truckEmissions}{" "}
                CO2 / t-km
              </p>
              <p
                className={`flex justify-center items-center gap-3 ${
                  railEmissions < truckEmissions
                    ? "text-green-500"
                    : "text-red-500"
                } font-semibold text-xl`}
              >
                <img className="w-8" src={TrainImg} alt="" /> {railEmissions}{" "}
                CO2 / t-km
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
