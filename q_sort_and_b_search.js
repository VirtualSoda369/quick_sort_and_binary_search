

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
let unsorted_arr =
[   
    78, -15, -27, -38,  39,  21,  10, -81,  53, -28,  61,  74,
   -99,  49, -28, -29,  82, -97, -21,  57, -98,   1,  64,  64,
   -74,  78,  73, 42, -35,  25,  64, -37,  24, -90, -13,  -7,
    31, -16,  69,  67, -32,  26,  19,  61,  81, -24,  60, -79,
   -35,  17,  83,  54,   4,  40,  89, -24,  85,  14, -95,  86,
   -12, -71,  69,  37,  45,  14, -49, -99, -21,  -8, -45, -86,
   -48, -47,  67,  55, -59,  10,  32,  69, -13,  87,  49, -80,
   -65, -54,  52, -77,  -2, -24,  82,  10,  79, -38,  64,  99,
    79, -42,  31,  83
];





//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
const quickSort = (arrToSort) =>
{
  
  if(arrToSort.length < 2 ) 
  {
    return arrToSort;
  }
  else
  {
    let lessArr = [];
    let eqArr = [];
    let greaterArr = [];

    let pivot = (arrToSort.length / 2) | 0;
  
    for (let i = 0, len = arrToSort.length; i < len; i++)
    {
      if(arrToSort[i] < arrToSort[pivot])
      {
        lessArr.push(arrToSort[i]);
      }
      else if(arrToSort[i] === arrToSort[pivot])
      {
        eqArr.push(arrToSort[i]);
      }
      else if(arrToSort[i] > arrToSort[pivot])
      {
        greaterArr.push(arrToSort[i]);
      }

    }
    return quickSort(lessArr).concat(eqArr, quickSort(greaterArr));
  }
}




//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
const binarySearch = (arrToSearch, itemToSearch)=>
{
  let startPointer = 0;
  let endPointer = arrToSearch.length-1;


  while(startPointer <= endPointer)
  {

    let currentPointer = Math.floor((startPointer + endPointer)/2);
    
    if(arrToSearch[currentPointer] === itemToSearch)
    {
      return console.log(`item is in the array!  it's located at pos : ${currentPointer}`);
    }
    else if(arrToSearch[currentPointer] < itemToSearch)
    {
      startPointer = currentPointer+1;
    }
    else if(arrToSearch[currentPointer] > itemToSearch)
    {
      endPointer = currentPointer-1;
    }

    
  }

  return console.log("the item is not present in the array!");

}





let sorted_arr = quickSort(unsorted_arr);

console.log(sorted_arr);


binarySearch(sorted_arr,42);

