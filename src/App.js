import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import {Line} from "react-chartjs-2";
import NavBar from "./containers/NavBar";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const divStyle = {
    width: '800px',
    height: '600px',
    marginLeft: '300px',
}

const headerStyle = {
    textAlign: 'center'
}

export default function BasicExample() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div style={{
            backgroundColor: 'rgb(255,255,51)',
            height: '1000px'
        }}>
            <div className='header'>
                <h1 className='title' style={headerStyle}>Величина инвестиционного портфеля</h1>
            </div>
            <div style={divStyle}>
                <Line data={data} options={options} />
            </div>

            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Стартовая дата" style={{
                    marginLeft: "25px"
                }}/>
                <TextField id="filled-basic" label="Конечная дата" style={{
                    marginLeft: "25px"
                }}/>
            </form>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
document.body.style.backgroundColor = 'rgb(255,255,51)';