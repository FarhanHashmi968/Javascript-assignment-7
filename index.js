// 1. Count characters-----
// let S = "AbaDd";
// let A = 0;
// let D = 0;
// let B = [];

// for (let i = 0; i < S.length; i++) {
//     if (S[i] === "A") {
//         A = A + 1;
//     } else if (S[i] === "D") {
//         D = D + 1;
//     }
// }
// B.push(A)
// B.push(D)
// console.log(B);




// 2. Count the heads-------
let str2 = "prepbytes"
let p = 0, r = 0, e = 0, b = 0, y = 0, t = 0, s = 0;
for (let i = 0; i < str2.length; i++) {
    if (str2[i] === "p") {
        p = p + 1
    }
    else if (str2[i] === "r") {
        r = r + 1;
    }
    else if (str2[i] === "e") {
        e = e + 1
    }
    else if (str2[i] === "b") {
        b = b + 1;
    }
    else if (str2[i] === "y") {
        y = y + 1
    }
    else if (str2[i] === "t") {
        t = t + 1;
    }
    else if (str2[i] === "s") {
        s = s + 1
    }
}
if (p > 1) {
    console.log(`p : ${p}`);
}
if (r > 1) {
    console.log(`r : ${r}`);
}
if (e > 1) {
    console.log(`e : ${e}`);
}
if (b > 1) {
    console.log(`b : ${b}`);
}
if (y > 1) {
    console.log(`y : ${y}`);
}
if (t > 1) {
    console.log(`t : ${t}`);
}
if (s > 1) {
    console.log(`s : ${s}`);
}




// 3. Count the vowels---------
let count3 = 0;
let str3 = "Prepbytes";
let str31 = str3.toUpperCase();
let vowels = "AEIOU"

for (let i = 0; i < str31.length; i++) {
    if (vowels.includes(str31[i])) {
        count3 = count3 + 1;
    }
}
console.log(count3);





// 4. Concatenate the strings-----------
let str4 = "Prep"
let str41 = "bytes"
console.log(str4.concat(str41));




// 5.Find length-----
let str5 = "CeDqe"
console.log(str5.length);



// 6. Find the winner-----------
let str6 = "ADDAAADDDDD";
let A = 0;
let D = 0;
for (let i = 0; i < str6.length; i++) {
    if (str6[i] === "A") {
        A = A + 1;
    } else {
        D = D + 1;
    }
}
if (A > D) {
    console.log(`A is winner`);
}
else if (D > A) {
    console.log(`D is winner`);
}
else {
    console.log(`Draw`);
}



// 7. Join strings---------
let str7 = "PrepBytes";
let str71 = "Technologies";
console.log(str7.concat(str71));



// 8. Plaindrome Check-------
// let str8 = "naman";
let str8 = "Naman";
let str81 = str8.split('').reverse().join("");
let result8 = (str8 === str81) ? "It is palindrome" : "It is not palindrome"
console.log(result8);



// 9. Reverse the string-------------
let str9 = "I am utkarsh raj";
let str91 = str9.split("").reverse().join('');
console.log(str91);




// 10. Match the strings---------
let str10 = "Prepbytes"
let str101 = "Prepbytes"
let result = (str10 === str101) ? "Yes" : "No"
console.log(result);




// 11. String replace---------
let str11 = "Hi, I am You. You prepbytes";
let d = str11.replaceAll("You", "")
console.log(d);





// 12. Split the string---------
let str12 = "I am utkarsh raj";
console.log(str12.split(" "));




// 13. Count the vowels and consonants---------
let countVowel = 0;
let countConsonant = 0;
let str13 = "Prepbytes";
let str131 = str13.toUpperCase()
let vowels13 = "AEIOU";
for (let i = 0; i < str131.length; i++) {
    vowels13.includes(str131[i]) ? countVowel = countVowel + 1 : countConsonant = countConsonant + 1;
}
console.log(countVowel, countConsonant);