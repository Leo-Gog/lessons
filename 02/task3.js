
// task3 - A and B play die, first 3 wins
let a, b;
function winnerAndLoser(a,b){
    let first=0,second=0, count1=0, count2=0;
    while(first!==3){
        first=Math.floor(Math.random()*6+1);
        count1++;
    }
    while(second!==3){
        second=Math.floor(Math.random()*6+1);
        count2++;
    }
    if(count1===count2){
        return winnerAndLoser(a,b);
    };
    return count1<count2?a:b;
}


//Math.floor(Math.random()*6+1) - die pattern;
//console.log(winnerAndLoser('batman','zoro'));
