import React from "react";
import { useState } from "react";
import { Game } from "../models/Game";

import PlayerContainer from "./playerElements/PlayerContainer";
import TopicComponent from "./TopicComponent";

// loading game from json
const playerData = require("../data/playerData.json");
const questionData = require("../data/questionData.json");

export default function GameComponent(props: any) {
  const [game, setGame] = useState(new Game(playerData, questionData));
  const [topics, setTopics] = useState(game.topics);

  return (
    <>
      <div className="column-container">
        <div className="column">
          <PlayerContainer players={props.players} />
        </div>
        <div className="column">
          <div className="question-table">
            <div className="topic">
              <div>Kategória</div>
              <div>1. szint</div>
              <div>2. szint</div>
              <div>3. szint</div>
            </div>
            {topics.map(topic => (
              <TopicComponent key={topic.name} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
