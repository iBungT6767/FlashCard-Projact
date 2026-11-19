"use client";
import { useState } from "react";
import type { AnswerRecord } from "@/types";
import type { Question } from "@/types";
import { questions } from "@/data/questions";
import { QuestionCard } from "./QuestionCard";

export function QuizGame(){
    const [currentIndex,setCurrentIndex] = useState(0);

    const [records,setRecords] = useState<AnswerRecord[]>([]);

    const [selectedId,setSelectedId] = useState<number | null>(null);

    const handleSelect =(id:number) =>{
        setSelectedId(id);
    }

    const currentQuestion =questions[currentIndex];
    return(
        <div>
            <QuestionCard question={currentQuestion}/>
            <p className="mt-4">ข้อที่ {currentIndex+1}/3</p>
        </div>
    )
}