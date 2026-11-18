"use client";
import type { Choice } from "@/types/index";

type ChoiceButtonProps ={
    choice:Choice;
    onSelect:(id:number) => void;
    isCorrect:boolean;
    isWrong:boolean;
};

export function ChoiceButton({choice,onSelect,isCorrect,isWrong}:ChoiceButtonProps){
    let buttonColor = "hover:bg-gray-100";
    if (isCorrect) {
        buttonColor = "bg-green-500 text-white";
    }
    else if (isWrong){
        buttonColor = "bg-red-500 text-white";
    }
    return(<button type="button" onClick={() => onSelect(choice.id)} className={`w-full border rounded-lg p-4  text-left ${buttonColor}`}>
        {choice.text}
        
    </button>
    );
}