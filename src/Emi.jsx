import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
function VehicleCard({ title, description }) {
  return (

  <div className="card1">
  <p style={{ color: 'red' }}>{title}</p>
  <h4 style={{ color: 'black' }}>{description}</h4>
</div>
  )
}

function Emi() {
  const [one_road, setonroad] = useState(0);
  const [ip, setip] = useState(0);
  const [dc, setdc] = useState(0);
  const [tree, setTree] = useState(0); // Initialize tree with an initial value of 0
  const [towhalf, settwohalf] = useState(0);
  const [two, settwo] = useState(0);
  const [one, setone] = useState(0);
  const [onehalf, setonehalf] = useState(0);
  const [png, setpng] = useState(0);
  const [month, setmonth] = useState(0);

  const click = () => {
    const values = Number(one_road) - Number(ip);
    console.log(values, "values");
    const result = Number(values) + Number(dc);
    const emi =
      ((Number(result) * Number(png)) / Number(100)) * Number(3) +
      Number(result);
    const newtree = Number(emi) / Number(month);
    const twohalf =
      ((Number(result) * Number(png)) / Number(100)) * Number(2.5) +
      Number(result);
    const newsettwohalf = Number(twohalf) / Number(30);
    const two =
      ((Number(result) * Number(png)) / Number(100)) * Number(2) +
      Number(result);
    const newtwo = Number(two) / Number(24);
    const onehalf =
      ((Number(result) * Number(png)) / Number(100)) * Number(1.5) +
      Number(result);
    const newonehalf = Number(onehalf) / Number(18);
    const one =
      ((Number(result) * Number(png)) / Number(100)) * Number(1) +
      Number(result);
    const newone = Number(one) / Number(12);
    setone(newone);
    setTree(newtree);
    settwohalf(newsettwohalf);
    setonehalf(newonehalf);
    settwo(newtwo);
    console.log(values);
    console.log(result, "lone ammount");

    console.log(two);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Kotak Mahindra Bank</h3>
                <div className="mb-3">
                  <label
                    htmlFor="onRoad"
                    className="form-label"
                    style={{ color: "red" }}
                  >
                    On Road Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="onRoad"
                    value={one_road}
                    onChange={(e) => setonroad(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ip" className="form-label">
                    IP
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="ip"
                    value={ip}
                    onChange={(e) => setip(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dc" className="form-label">
                    doumentation charge
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="dc"
                    value={dc}
                    onChange={(e) => setdc(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="png" className="form-label">
                    Percentage
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="png"
                    value={png}
                    onChange={(e) => setpng(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="month" className="form-label">
                    Month
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="month"
                    value={month}
                    onChange={(e) => setmonth(e.target.value)}
                  />
                </div>
                <button className="btn btn-warning" onClick={click}>
                  Calculate Result
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container1">
        <div className="  justify-content-center  mt-4">
          <VehicleCard title="3 Year" description={`${tree.toFixed(0)} x 36`} />
          <VehicleCard
            title="2.5 Year"
            description={`${towhalf.toFixed(0)} x 30`}
          />
          <VehicleCard title="2 Year" description={`${two.toFixed(0)} x 24`} />
          <VehicleCard
            title="1.5 Year"
            description={`${onehalf.toFixed(0)} x 18`}
          />
          <VehicleCard title="1 Year" description={`${one.toFixed(0)} x 12`} />
        </div>
      </div>
    </>
  );
}

export { Emi };