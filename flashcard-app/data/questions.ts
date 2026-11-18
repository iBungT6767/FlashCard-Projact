import type { Question } from "@/types/index";

export const question1: Question = {
    id: 1,
  english: "Egg",
  thai: "ไข่",
  difficulty: 1,
  example: "I buy an egg at the market",
  choices: [
    { id: 1, text: "ไข่" },
    { id: 2, text: "หนังสือ" },
    { id: 3, text: "แมว" },
    { id: 4, text: "ราคาถูก" },
    { id: 5, text: "ปืน" },
  ],
  correctChoiceId: 1,
};
