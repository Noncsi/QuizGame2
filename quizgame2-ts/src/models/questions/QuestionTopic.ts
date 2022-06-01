import { Question } from "./Question";

export class QuestionTopic {
  name: string;
  level1: Question[];
  level2: Question[];
  level3: Question[];

  constructor(
    name: string,
    level1: Question[],
    level2: Question[],
    level3: Question[]
  ) {
    this.name = name;
    this.level1 = level1;
    this.level2 = level2;
    this.level3 = level3;
  }
}
