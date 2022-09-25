import React  from "react";
import MatchesCard from '../components/MatchesCard'
import '../assets/css/matches.css';


import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { useState , useEffect } from "react";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
//npm install --save react-on-screen


var today = new Date();

var month = ((today.getMonth()+1) < 10 ? ('0'+(today.getMonth()+1)) : (today.getMonth()+1))
var jour =  ((today.getDate()) < 10 ? ('0'+(today.getDate())) : (today.getDate()))
var datetoday = today.getFullYear()+'-'+ month+'-'+ jour;

const Match = () => {

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = () => {
    fetch("https://api.sofascore.com/api/v1/sport/football/scheduled-events/"+ datetoday, {
        "headers": {
          "accept": "*/*",
          "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
          "cache-control": "max-age=0",
          "if-none-match": "W/\"36050c2ee9\"",
          "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site"
        },
        "referrer": "https://www.sofascore.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
      })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        var events = data['events']

        // start converting
        var i = 0;
        var games = []
        for (var game in events) {
            var league = events[i]['tournament']['name'];
            var category = events[i]['tournament']['category']['name'];
            var id = events[i]['tournament']['id'];
            
            var hometeam = events[i]['homeTeam']['name'];
            var awayteam = events[i]['awayTeam']['name'];

            var homeid = events[i]['homeTeam']['id'];
            var awayid = events[i]['awayTeam']['id'];
            
            date = events[i]['startTimestamp'];


            const d1 = new Date();
            d1.setHours(0, 0, 0, 0);

            var timetoday = Math.round(d1.getTime() / 1000);

            if (date >= timetoday) {
                let unix_timestamp = date

                var date = new Date(unix_timestamp * 1000);
                var hours = date.getHours();
                var minutes = "0" + date.getMinutes();
                var seconds = "0" + date.getSeconds();

                var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

                games.push({'id': id,
                'title' :  datetoday + ', ' + formattedTime,
                'description' :  league + ' - ' + category ,
                'team1': hometeam,
                'team2' : awayteam,
                'imgUrl1' : "https://api.sofascore.app/api/v1/team/"+ homeid +"/image",
                'imgUrl2': "https://api.sofascore.app/api/v1/team/"+ awayid +"/image"})
            
            }
                
            i++;
        }
        // end converting

        setProjects(games);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {projects &&
                          projects.map((project, index) => {
                            return (
                              <MatchesCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Match;
