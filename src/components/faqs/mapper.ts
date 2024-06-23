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
      "All you need to do is proceed the payment, fill in the information needed in order to create your personalized program and we'll contact you ourselves on WhatsApp for further information and communication.",
    timeout: order(1),
  },
  {
    question: "How does this service work?",
    response:
      "After we finish your workout plan, we will send you a document which it will provide everything you need to do in order for you to achieve the results you want, from training to diet and also from that day on you can communicate 1 on 1 with your personal trainer by calls, messages and also ask him about various questions you may have until the trail it's over.",
    timeout: order(2),
  },
  {
    question: "Where can I see real customer's results?",
    response:
      "You can check the customers opinions in the upper section and you can contact us to send you some of the best transformations that our costumers have successfully achieved through the coaching program which is reliable every step of the way.",
    timeout: order(3),
  },
];
