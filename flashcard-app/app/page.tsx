import { QuestionCard } from "@/components/QuestionCard"
import { question1 } from "@/data/questions"


export default function Home(){
  return<main className="font-bold text-2xl m-4 text-center ">Flash Card app
    <h1><QuestionCard question={question1} /></h1>
  
  </main>
}
