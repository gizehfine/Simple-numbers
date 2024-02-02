let i = 1;

let k = 2;

let numb = 100;

outer:
for(i = 1; i <=numb; i++){
    for(k = 2; k < i; k++){
        if(i % k === 0 ) continue outer;
    }
console.log(i)
}
