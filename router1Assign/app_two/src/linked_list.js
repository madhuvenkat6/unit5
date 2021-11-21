function bubbleSort(arr){

    if(arr.length<=1){
        return;
    }

    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j]=temp;
            }
        }
    }

    console.log(arr.join(" "));
}


function selectionSort (arr){
    if(arr.length<=1){
        return;
    }

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    console.log(arr.join(" "));
}



function mergeSort(low,high,arr){

    if(low<high){
        let mid = low + Math.floor((high-low)/2);
       // console.log(mid);

        mergeSort(low,mid,arr);
        mergeSort(mid+1,high,arr);
        merge(low,mid,high,arr);
    }
    return;
}

function merge(low,mid,high,arr){
    let arr1 = [];
    let arr2 = [];

    let i=0;
    let j=low;
    while(j<=mid){
        arr1[i] = arr[j];
        i++;
        j++;
    }
    i=0;
    j=mid+1;
    while(j<=high){
        arr2[i] = arr[j];
        i++;
        j++;
    }
    
    i=0;
    j=0;
    let k=low;
    while(i<=arr1.length-1 && j<=arr2.length-1){
        
        if(arr1[i]<=arr2[j]){
            arr[k] = arr1[i];
            k++;
            i++;
        }else{
            arr[k] = arr2[j];
            k++;
            j++;
        }

    }

    while(i<=arr1.length-1){
        arr[k]=arr1[i];
        i++;
        k++;
    }

    while(j<=arr2.length-1){
        arr[k] = arr2[j];
        j++;
        k++;
    }


 return;
}


function quickSort(low,high,arr){
    if(low<high){
        let mid = partition(low,high,arr);
        quickSort(low,mid-1,arr);
        quickSort(mid+1,high,arr);
    }
    return;
}

function partition(low,high,arr){

    let pivot = arr[high];
    let i=-1,j=0;


    while( j<=high ){
        if(arr[j]>pivot){
            j++;
        }else{
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
 
    return i;
    
}

function runProgram(input){  
    input = input.trim().split("\n");
    let n = Number(input[0].trim())
    let arr = input[1].trim().split(" ").map(Number);

    console.log(arr.join(" ").trim());
   // bubbleSort(arr)
   // selectionSort(arr)

    // mergeSort(0,arr.length-1,arr);
    // console.log(arr.join(" "));

    quickSort(0,arr.length-1,arr); 

    // console.log(partition(0,arr.length-1,arr));
    console.log(arr.join(" ").trim());

  }
if (process.env.USER === "manikantamedicherla") {
    runProgram(`7
    1 9 4 6 3 3 10`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }