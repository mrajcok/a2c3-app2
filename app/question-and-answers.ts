export interface Question {
    author:  string;
    content: string;
}
export interface Answer {
    author:    string;
    content:   string;
    accepted?: boolean;
}
export interface QuestionAndAnswers {
    question: Question;
    answers:  Array<Answer>;
}
