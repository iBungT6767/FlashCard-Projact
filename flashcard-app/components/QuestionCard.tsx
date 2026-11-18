"use client";
import type { Question } from "@/types/index";
import  { Flashcard } from "./Flashcard";
import { ChoiceButton } from "./ChoiceButton";
import { useState } from "react";

type QuestionCardProps ={
    question:Question;
};

export function QuestionCard ({question}:QuestionCardProps){
    const [selectedId, setSelectedId] = useState<number|null>(null);

    const handleSelect = (id:number) => {
        setSelectedId(id);
    };
    
    return(
    <div className="flex flex-col gap-2">
        <Flashcard card={question}/>
        <h1>กรุณาเลือกคำตอบ</h1>
        {question.choices.map((choice) => {
            const hasAnswer = selectedId !== null;
            const isSelected = selectedId === choice.id;
            const isCorrect = hasAnswer && choice.id === question.correctChoiceId;
            const isWrong = isSelected && !isCorrect;
            return(
            <ChoiceButton 
                key={choice.id} 
                choice={choice} 
                onSelect={handleSelect}
                isCorrect={isCorrect}
                isWrong={isWrong}
                />
            );
        })}
    </div>
    );
}
