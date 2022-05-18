import print,{text,team} from "./data.js";
import sum from "./rest.js";
import concentrateArrays from "./spread.js";
import fetchFromGivenLink from "./fetch.js";



//first exercise
console.log(text);
console.log(team);
print();

//second exercise
console.log(sum(1,2,4,5,6));
console.log(sum(1,2,6));
console.log(sum(1,2,4,5,6,123,3));

//third exercise
console.log(concentrateArrays([1,2,3],[4,5,6]));

//fourth exercise 
await fetchFromGivenLink();
