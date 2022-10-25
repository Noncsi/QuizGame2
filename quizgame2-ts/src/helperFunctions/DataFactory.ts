import { Player } from "../models/Player";
import { Question } from "../models/questions/Question";
import { Category } from "../models/questions/Category";

import { Guid } from "guid-typescript";
import { ICategory, IQuestion } from "../models/model";

export const playerFactory = (playerData: any) => {
  const asd = playerData.map(
    (object: any) =>
      new Player(object.name, object.score, Guid.parse(object.id))
  );
  return asd;
};

export const questionFactory = (questions: ICategory[]) => {
  return questions.map(
    (baseQuestion: ICategory) =>
      new Category(
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

// jsonTopics.map(
//   (object: any) => new QuestionTopic(object.level, object.question, object.answer)
// );

// export const questionCategoryFactory = (jsonQuestionCategories: any) =>
//   jsonQuestionCategories.map(
//     (object: any) => new QuestionCategory(object.name, object.questions)
//   );
