


function addCart(){
    in_localStorage();
    result();
}


function in_localStorage(){
    let array_to_string = JSON.stringify( inputNum(a));
        localStorage.setItem('product', array_to_string);
}


function getData() {
	let tempArray = JSON.parse(localStorage.getItem('product'));
		if (tempArray) {
			return tempArray;
		} else {
			return [];
		  }
}

function inputNum(a){
debugger;


    let input=getData();
    let b;

        if(input.length == 0){
            input.push(a);
        
        }else{
            
            for(let key of input){
               
                if(b == 0){
                    break;
                }
                else if(key != a){
                    b=a;

                }else{
                    b=0;
                }
            
            }

            if(b != 0){
                     input.push(a);

            }
        }
        // location.reload();


        return input;

}
function result(){
    let tempArray = JSON.parse(localStorage.getItem('product'));

    if (tempArray) {
        return document.getElementById("cartNo").innerHTML= tempArray.length ;
        
    } else {
        return document.getElementById("cartNo").innerHTML= 0 ;
        
      }


}
result();

function localstorageClear(){
    location.reload();
    window.localStorage.clear();

}
