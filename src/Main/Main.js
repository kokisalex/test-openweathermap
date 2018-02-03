import React, {Fragment} from 'react';
import './Main.css';

export default function Main(props) {
  const {
    weather,
    city,
    inputCity,
    inputValue,
    addCity,
  } = props;

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-text">Open Weather Map</span>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <h3>Weather in {weather.name}, {weather.sys.country}</h3>
            <div className="media">
              <img className=" align-self-center mr-3"
                   src={'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'}
                   alt="..."/>
              <div className="media-body">
                <h5 className="mt-0">{weather.main.temp} °C </h5>
                {weather.weather[0].description}
              </div>
            </div>
          </div>
          <div className="col-8">
            <table className="table table-hover">
              <thead>
              <tr>
                <th scope="col">City</th>
                <th scope="col">t °C</th>
                <th scope="col">Handle</th>
              </tr>
              </thead>
              <tbody>
              {
                city.map(item => (
                  <tr>
                    <td>{item.name}, {item.sys.country}</td>
                    <td>{item.main.temp}</td>
                    <td>
                      <img className=" align-self-center mr-3"
                           src={'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'}
                           alt="..."/>
                      {item.weather[0].description}
                    </td>
                  </tr>))
              }
              </tbody>
            </table>

            <div className="input-group mb-3">
              <input type="text"
                     value={inputValue}
                     onChange={inputCity}
                     className="form-control"
                     placeholder="City"
                     aria-label="City"
                     aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary"
                        onClick={addCity}
                        disabled={!inputValue}
                        type="button">
                  add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
    ;
};