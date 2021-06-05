/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/


const rot13 = (string) => {
//  creating *letterBox* - string in alphabetic way
  const letterBox = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// declaring *iter function* - that will pass through the text 
  const iter = (str, acc) => {   
// if length of string is 0 (phrase is empty) => returning *accumulator*
      if (str.length===0) { return acc; }
/* if is not an uppercase character => calling *function iter* by itself 
with the new string minus first letter and adding to *accumulator*
without coding symbol */ 
      if (! /^[A-Z]*$/.test(str[0])) {return iter(str.substring(1), acc+str[0]); };
// and now we loop through the uppercase letters (26 letters)
//checking their index in our *letterBox*
// if it's more that 13 , we add 13 , else we substract 13 and   
// and of course... calling *iter function* with new string minus first character 
// plus *accumumator* 
     for (let i=0; i<26;i++)
     {
       if ( (letterBox[i]===str[0]) && (i>12))
       { return iter(str.substring(1), acc + letterBox[i-13]); }
       if ( (letterBox[i]===str[0])&& (i<13))
       { return  iter(str.substring(1), acc + letterBox[i+13]); };
      };
  };
 // calling *iter function* with the provided *string* and empty *accumulator*    
 return iter(string,'');
};
