type QuestionMapper = Array<{
  question: string;
  response: string;
  timeout: number;
}>;

const response =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.";

export const questionsMapper: QuestionMapper = [
  {
    question: "How does your service work?",
    response,
    timeout: 1000,
  },
  {
    question: "Can I subscribe to one service only?",
    response,
    timeout: 1100,
  },
  {
    question: "Where can I see real customer's results?",
    response,
    timeout: 1200,
  },
  {
    question: "What do I need to get started?",
    response,
    timeout: 1300,
  },
  {
    question: "How do I cancel my subscription?",
    response,
    timeout: 1400,
  },
];
