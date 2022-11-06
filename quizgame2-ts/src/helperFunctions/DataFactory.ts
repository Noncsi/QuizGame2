import { Player } from "../models/Player";
import { Question } from "../models/questions/Question";
import { Topic } from "../models/questions/Topic";

import { Guid } from "guid-typescript";
import { ITopic, IQuestion } from "../models/model";

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
