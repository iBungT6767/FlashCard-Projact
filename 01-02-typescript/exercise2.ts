type Card = {
  id: number;
  english: string;
  thai: string;
  difficulty: number;
  example?: string;
};
const vocabulary: Card[] = [
  {
    id: 1,
    english: "Egg",
    thai: "ไข่",
    difficulty: 1,
    example: "I buy an egg at the market",
  },
  {
    id: 2,
    english: "Book",
    thai: "หนังสือ",
    difficulty: 2,
    example: "I have a book",
  },
  {
    id: 3,
    english: "Cat",
    thai: "แมว",
    difficulty: 1,
  },
  {
    id: 4,
    english: "Cheap",
    thai: "ราคาถูก",
    difficulty: 4,
  },
  {
    id: 5,
    english: "Gun",
    thai: "ปืน",
    difficulty: 3,
  },
];
const RATINGS = ["very easy", "easy", "medium", "hard", "very hard"] as const;
//as const ทำให้
//const RATINGS = ["very easy"|"easy"|"medium"|"hard"|"very hard"];
type Rating = (typeof RATINGS)[number];
const ratingScore: Record<Rating, number> = {
  "very easy": 1,
  easy: 2,
  medium: 3,
  hard: 4,
  "very hard": 5,
};
function ratingToScore(r: Rating): number {
  return ratingScore[r];
}
type Choice = {
  id: number;
  text: string;
};
type Five<T> = [T, T, T, T, T];
type Question = Card & {
  choices: Five<Choice>;
  //five<choice> = [
  //choice,choice,
  //]
  correctChoiceId: number;
};

type AnswerRecord = {
  cardId: number;
  selectedChoiceId: number;
  isCorrect: boolean;
  rating: Rating;
};
type NewCard = Omit<Card, "id">;
type CardUpdate = Partial<Omit<Card, "id">>;

const question1: Question = {
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
// const answer1: AnswerRecord = {
//   cardId: 1,
//   selectedChoiceId: 1,
//   isCorrect: true,
//   rating: "very easy",
// };
const updateCard1: CardUpdate = {
  difficulty: 3,
};
function pickRandom<T>(list: T[]): T | undefined {
   if (list.length === 0) {
     return undefined;
   } 
     const index = Math.floor(Math.random() * list.length);

     return list[index];
  }
// console.log(pickRandom([1, 2, 3, 4, 5]));
// console.log(pickRandom(vocabulary));
// console.log(pickRandom<number>([]));
const records: AnswerRecord[] =[
  {cardId:1,selectedChoiceId:1,isCorrect:true,rating:"very easy"},
  {cardId:2,selectedChoiceId:3,isCorrect:false,rating:"hard"},
  {cardId:3,selectedChoiceId:2,isCorrect:true,rating:"easy"},
  {cardId:4,selectedChoiceId:4,isCorrect:true,rating:"medium"},
  {cardId:5,selectedChoiceId:5,isCorrect:false,rating:"very hard"},
  {cardId:6,selectedChoiceId:2,isCorrect:false,rating:"hard"},
  {cardId:7,selectedChoiceId:3,isCorrect:true,rating:"medium"},
  {cardId:1,selectedChoiceId:2,isCorrect:false,rating:"hard"}
];
function accuracy(records:AnswerRecord[]):number {
  if (records.length === 0){
    return 0;
  }
  const correctCount = records.filter((r) => r.isCorrect).length;
  return correctCount / records.length;
};
type Sum ={
  total:number;
  count:number;
};
function averageRatingByCard(records:AnswerRecord[]): Record<number,number>{
  const sums = records.reduce<Record<number,Sum>>((acc,r) => {
    const current = acc[r.cardId]??{total:0,count:0};
    acc[r.cardId]={
      total: current.total + ratingToScore(r.rating),
      count: current.count + 1
    };
    return acc;
  },{});
  const result : Record<number,number> = {};
  for (const[key,sum] of Object.entries(sums)){
    result[Number(key)] = sum.total/ sum.count;
  }
  return result;
};
function hardestCards(records:AnswerRecord[],n:number):number[]{
  const averages = averageRatingByCard(records);
  return Object.entries(averages)
    .sort((a,b) => b[1] - a[1])
    .slice(0,n)
    .map(([key]) => Number(key));
};
type GameState = |{
  status:"playing"; currentIndex:number
}
|{
  status:"finished"; score:number
}
function describeState(state:GameState): string {
  if (state.status === "playing"){
    return `กำลังทำข้อที่ ${state.currentIndex+1}`;
  }
  return `จบเกมได้ ${state.score} คะแนน`;
};
console.log(accuracy(records));
console.log(averageRatingByCard(records));
console.log(hardestCards(records, 3));
console.log(describeState({ status: "playing", currentIndex: 0 }));
console.log(describeState({ status: "finished", score: 8 }));
console.log(accuracy([]));
console.log(hardestCards(records, 50));


