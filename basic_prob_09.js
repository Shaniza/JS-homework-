//9. Write a program to count the number of vowels in a string

function vowelCount(str){
    let accum = 0
    let x = str.split('')
    for(let i = 0; i< x.length; i++){
        if(x[i] == 'a' || x[i] == 'e' || x[i] == 'i' || x[i] == 'o' || x[i] == 'u' ){
            accum++
        }
        else{
            continue
        }
    }
    console.log(accum)

}
vowelCount('Mona')
vowelCount('Permutation')