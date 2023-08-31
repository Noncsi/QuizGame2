import { Player } from "../models/Player";
import { Question } from "../models/questions/Question";
import { Topic } from "../models/questions/Topic";

import { Guid } from "guid-typescript";
import { ITopic, IQuestion, ITrack } from "../models/model";
import { Track } from "../models/questions/Track";
import { SongQuestion } from "../models/questions/SongQuestion";

export const playerFactory = (playerData: any) => {
  const asd = playerData.map(
    (object: any) =>
      new Player(object.name, object.score, Guid.parse(object.id))
  );
  return asd;
};

export const questionFactory = (questions: ITopic[]) => {
  return questions.map(
    (baseQuestion: ITopic) =>
      new Topic(
        baseQuestion.name,
        baseQuestion.questionsByLevels.map((level: IQuestion[]) => {
          return level.map(
            (questionObject: IQuestion) =>
              new Question(questionObject.question, questionObject.answer)
          );
        })
      )
  );
};

export const songQuestionFactory = (items: any) => {
  const songs = items.map((item: any) => {
    return new SongQuestion(
      new Track(item.track.uri, item.track.name, item.track.artists[0].name)
    );
  });
  return shuffleArray(songs);
};

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const generateRandomString = (length: number) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
