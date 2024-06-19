type QuestionMapper = Array<{
  question: string;
  response: string;
  timeout: number;
}>;

const order = (i: number) => 1000 + 100 * i;

export const questionsMapper: QuestionMapper = [
  {
    question: "What do I need to get started?",
    response:
      "After you finish the payment, we will contact you and ask you a few questions that we will need in order to create your workout plan.",
    timeout: order(1),
  },
  {
    question: "How does this service work?",
    response:
      "After we finish your workout plan, we will send you a document which it will provide everything you need to do in order for you to achieve the results you want, and also from that day on you can communicate 1 on 1 with your personal trainer by calls, messages and also ask him about various questions you may have until the 10 day trail it's over.",
    timeout: order(2),
  },
  {
    question: "Where can I see real customer's results?",
    response:
      "You can check our social media pages and check real customer results and reviews there",
    timeout: order(3),
  },
  {
    question: "How do I cancel my subscription?",
    response:
      "As soon as you stop paying your subscription will expire, if you don't like the service you can ask for a refund within the first 3 days of subscribing.",
    timeout: order(4),
  },
  {
    question: "What if I don't like the service?",
    response:
      "If our service doesn't meet your expectations you can request a refund within the first 3 days of subscribing.",
    timeout: order(5),
  },
];
