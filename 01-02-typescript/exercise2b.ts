function averageRatingByCard(record:AnswerRecord[]):Record<number,number>{
    const sums = record.reduce<Record<number,Sum>>((acc,r) =>{
        const current =acc[r.cardId]?? {total:0,count:0};
        acc[r.cardId] = {
            total: current.total + ratingToScore(r.rating),
            count: current.count +1
        };
        return acc;
    }, {})
    const result: Record<number,number> ={};
    for (const[key,sum] of Object.entries(sums)) {
        result [Number(key)] = sum.total / sum.count;
    }
    return result;
}