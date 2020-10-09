import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Jumbotron, Form, FormControl, Button } from 'react-bootstrap';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



function App() {
  const [key, setKeyWord] = useState("")
  const [weather, setData] = useState(null)



  const handleSubmit = (e) => {
    console.log("meo", e.target.city.value)
    e.preventDefault()
    getWeatherData(e.target.city.value)
  }
  const getWeatherData = async (e) => {
    console.log("key", key)
    let city = ''
    if (e) city = e
    try {
      let url = `${process.env.REACT_APP_BACKEND}?city=${city}`
      let response = await fetch(url)
      let data = await response.json()
      setData(data.data)
      console.log("do we get data", data)
    }
    catch (err) {
      console.log(err.messages)
    }
  }

  if (!weather) {
    return (
      <div>
        <Jumbotron fluid className="">
          <Container className="text-center ">
            <h1 class="name">enter city name</h1>
            <div className="start">
              <Form inline onSubmit={(e) => handleSubmit(e)} >
                <FormControl type="text" placeholder="London" name="city" className="mr-sm-2 bar" onChange={(event) => setKeyWord(event.target.value)} />
                <Button variant="dark" type="submit">Search</Button>
              </Form>
            </div>

          </Container>
        </Jumbotron>
        <div className="sweet-loading">
          <ClipLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={true}
          />
        </div>


      </div>
    )
  }
  return (
    <div className="App">
      <Jumbotron fluid className="">
        <Container className="text-center ">
          <h1 class="name">enter city name</h1>            <div className="start">
            <Form inline onSubmit={(e) => handleSubmit(e)}>
              <FormControl type="text" placeholder="London" name="city" className="mr-sm-2" onChange={(event) => setKeyWord(event.target.value)} />
              <Button variant="bg-success" type="submit">Search</Button>
            </Form>
          </div>
        </Container>
      </Jumbotron>
      <div className="container-fluid row ga  ">
        <div className="col bg-primary bk">
          <div className="container-fluid text-white my-auto news-container rounded">
            <div className="container mx-auto my-4 py-4">
              <div className="row text-center">

                <h2 className="col-12 name">
                  Location: {weather.name}
                </h2>
                <h3 className="col-12 ">
                  Temperature: {weather.main.temp}°C
                  </h3>
                <div className="col-12 text-warning text-center">
                  <span> Feel like: </span> <strong> {weather.main.feels_like}°C </strong>
                  <span> Low : </span><strong> {weather.main.temp_min}°C </strong>

                  <span> High : </span><strong> {weather.main.temp_max}°C </strong>

                </div>
                <h3 className="col-12">
                  {weather.weather[0].description && weather.weather[0].description}
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="Ga"
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div >
  );
}

export default App;
