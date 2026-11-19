"use client";
import { useState } from "react";
import type { AnswerRecord ,Rating } from "@/types";
import { questions } from "@/data/questions";
import { QuestionCard } from "./QuestionCard";
import { RatingButton } from "./RatingButtons";

export function QuizGame(){
    const [currentIndex,setCurrentIndex] = useState(0);

    const [records,setRecords] = useState<AnswerRecord[]>([]);

    const [selectedId,setSelectedId] = useState<number | null>(null);
    if (currentIndex >= questions.length){
        return <p>ถามครบแล้ว {records.length} ข้อ</p>
    }
    const currentQuestion =questions[currentIndex];
    
    const handleSelect =(rating:Rating) =>{
        if (selectedId === null)return;

        const newRecord:AnswerRecord ={
            cardId:currentQuestion.id,
            selectedChoiceId:selectedId,
            isCorrect:selectedId === currentQuestion.correctChoiceId,
            rating:rating
        };

        setRecords((prev) =>[...prev,newRecord]);
        setSelectedId(null);
        setCurrentIndex((prev) => prev+1);
    };

    return(
        <div className="mx-auto max-w-md p-4">
            <QuestionCard question={currentQuestion} selectedId={selectedId} onSelect={setSelectedId}/>
            {selectedId !== null && (
                <div className="mt-4">
                    <RatingButton onRate={handleSelect}/>
                </div>
            )}
            <p className="mt-4">ข้อที่ {currentIndex+1}/{questions.length}</p>
        </div>
    )
}