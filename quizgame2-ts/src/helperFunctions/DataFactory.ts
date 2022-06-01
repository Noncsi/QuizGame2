import { Player } from "../models/Player";
import { Question } from "../models/questions/Question";
import { QuestionTopic } from "../models/questions/QuestionTopic";

import { Guid } from "guid-typescript";

export const playerFactory = (playerData: any) =>
  playerData.map(
    (object: any) =>
      new Player(object.name, object.score, Guid.parse(object.id))
  );

export const TopicAndQuestionFactory = (topics: any) =>
  topics.map(
    (topic: QuestionTopic) =>
      new QuestionTopic(
        topic.name,
        topic.level1.map(
          (question: Question) =>
            new Question(question.question, question.answer)
        ),
        topic.level2.map(
          (question: Question) =>
            new Question(question.question, question.answer)
        ),
        topic.level3.map(
          (question: Question) =>
            new Question(question.question, question.answer)
        )
      )
  );
// jsonTopics.map(
//   (object: any) => new QuestionTopic(object.level, object.question, object.answer)
// );

// export const questionCategoryFactory = (jsonQuestionCategories: any) =>
//   jsonQuestionCategories.map(
//     (object: any) => new QuestionCategory(object.name, object.questions)
//   );
