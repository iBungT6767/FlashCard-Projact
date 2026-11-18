"use client";
import type { Choice } from "@/types/index";

type ChoiceButtonProps ={
    choice:Choice;
    onSelect:(id:number) => void;
};

export function ChoiceButton({choice,onSelect}:ChoiceButtonProps){
    return(<button type="button" onClick={() => onSelect(choice.id)} className="w-full border rounded-lg p-4  text-left hover:bg-gray-100">
        {choice.text}
        
    </button>
    );
}