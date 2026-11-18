"use client";
import type { Question } from "@/types/index";
import  { Flashcard } from "./Flashcard";
import { ChoiceButton } from "./ChoiceButton";
import { useState } from "react";

type QuestionCardProps ={
    question:Question;
};

export function QuestionCard ({question}:QuestionCardProps){
    const [selectId, setSlectedId] = useState<number|null>(null);
    return(
    <div className="flex flex-col gap-2">
        <Flashcard card={question}></Flashcard>
        <h1>กรุณาเลือกคำตอบ</h1>
        {question.choices.map((choice) => (
            <ChoiceButton key={choice.id} choice={choice}/>
        ))}
    </div>
    );
}

