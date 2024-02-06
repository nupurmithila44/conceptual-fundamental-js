// for( i = 1; i <= 10; i+=3){
//     console.log('methila', i);
// }

const nums =[ 12, 32, 43, 43, 34, 345];

let oddNumber = 0;
let evenNumber = 0;

for (i = 0; i < nums.length; i++){
   const x = nums[i];
   if(x % 2 ===0){
   evenNumber = evenNumber + x;
   }
   else{
    oddNumber = oddNumber + x;
   }
}
console.log(evenNumber);
console.log(oddNumber);