type Card = {
    id: number;
    english: string;
    thai: string;
    difficulty: number;
    example?: string;
}
const vocabulary: Card[] = [{
    id: 1,
    english: "Egg",
    thai: "ไข่",
    difficulty: 1,
    example: "I am buy an egg at the market"
}
,
{
    id: 2,
    english: "Book",
    thai: "หนังสือ",
    difficulty: 2,
    example: "I have a book"
}
,
{
    id: 3,
    english: "Cat",
    thai: "แมว",
    difficulty: 1
}   
,
{
    id: 4,
    english: "Cheap",
    thai: "ราคาถูก",
    difficulty: 4
}
,
{
    id: 5,
    english: "Gun",
    thai: "ปืน",
    difficulty: 3,
}
]
function getEnglishWords(list: Card[]) {
    return list.map((card) => card.english);
}
function getHardWords(list: Card[]) {
    return list.filter((card) => card.difficulty >= 4);
}
//ตรงนี้ได้ทำการแก้ไขfunctionตรงcard.id
//codeเดิม
//function findById(list:Card[], id:number) {
//    return list.find((card) => card.id === card.id);
//}
//
function findById(list: Card[], id: number): Card | undefined {
  return list.find((card) => card.id === id);
}
function checkAnswer(card: Card, userAnswer: string): boolean {
    return card.thai === userAnswer;
}
function averageDifficulty(list:Card[]) {
    const total = list.reduce(( sum, card) => sum + card.difficulty,0);
    return total/list.length;
}
//ตรงนี้แก้ไขจากใช้ifไปใช้switch
//type Rating = "very easy"| "easy"| "medium"| "hard"| "very hard";
//function ratingToScore(rating:Rating): number {
//    if(rating === "very easy"){
//        return 1;
//    }
//    if(rating === "easy"){
//        return 2;
//    }
//    if(rating === "medium"){
//        return 3;
//    }
//    if(rating === "hard"){
//        return 4;
//    }
//    if(rating === "very hard"){
//        return 5;
//    }
//}
//
type Rating = "very easy"| "easy"| "medium"| "hard"| "very hard";
function ratingToScore(rating: Rating): number {
  switch (rating) {
    case "very easy":
      return 1;
    case "easy":
      return 2;
    case "medium":
      return 3;
    case "hard":
      return 4;
    case "very hard":
      return 5;
  }
}

function getExample(card:Card): string {
    if(card.example === undefined){
        //return card.english;
        return "ไม่เจอตัวอย่าง";
    }
    //แก้ตรงนี้เพราะไม่รู้ว่าใส่""ได้
    return card.example
}
//อันนี้ใช้แบบ??
//function getExample(card: Card): string {
//  return card.example ?? "ไม่มีตัวอย่าง";
//}
console.log(ratingToScore("very hard"));
//getExample(3); //errorเพราะต้องใส่vocabulary
//findById(vocabulary, "2");//errorเพราะ
