function sumZero (arr, num) {
let obj = []
let diff

for (let i = 0; i < arr.length; i++) {
    diff = num - arr[i]

    if (obj[diff]) {
      return true
    } else {
      obj[arr[i]] = true
    }
  }
  return false

}

let sumResult = sumZero([0,1,3], 0)

// The runtime for this function should be O(n) for only having one loop involved.

function uniqueCharacters(str)
{
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
 
    return true;
}
// The runtime for this function should O(n^2) for having two nested loops

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

// The runtime for this function should be just 0(n) since we are only running a single loop. 


function findLongestWord (arr) {
    let maxString = arr[0].length
    let answer = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let max = arr[i].length
        if (max > maxString) {
            answer = arr[i]
            maxString = max
        }
    }
    return answer
}

// The runtime for this function should be just 0(n) since we are only running a single loop. 