"use client"
import type { Card } from "@/types/index";
import { useState } from "react";

type FlashcardProps ={
    card:Card;
};
export function Flashcard ({card}:FlashcardProps){
    const [isFipped,setIsFipped] = useState(false);
    return <div>
        <div onClick={() => setIsFipped(!isFipped)} >
        {isFipped ?(
        <h2 className="border rounded-lg p-8 text-4xl bg-blue-400 text-gray-900 cursor-pointer">{card.thai}</h2>
        ) : (
            <h2 className="border rounded-lg p-8 text-4xl bg-blue-400 text-gray-900 cursor-pointer">{card.english}</h2>
        )
        
        }    
        </div>
        {card.example&&(
            <p className="mt-4">Example: {card.example}</p>
        )}
    </div>
}