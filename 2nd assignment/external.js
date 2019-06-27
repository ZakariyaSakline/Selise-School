


function addCart(){
    in_localStorage();
    result();
    addTableRow();
}

addTableRow();
result();
totalPrice();


function in_localStorage(){
    let array_to_string = JSON.stringify( inputNum(a,proPrice,proName));
        localStorage.setItem('product', array_to_string);
       
        totalPrice();

}


function getData() {
	let tempArray = JSON.parse(localStorage.getItem('product'));
		if (tempArray) {
			return tempArray;
		} else {
			return [];
		  }
}

function inputNum(a,proPrice,proName){

    let input=getData();
    let proId= a;
    let pro_price=document.getElementById(proPrice).innerText ;
    let pro_name=document.getElementById(proName).innerText ;

    let item_quantity=0;
    let condition_data=0;
    // let total_price=0;
        if(input.length !=0){

            for(let i=0; i<input.length; i++){
                if(input[i].proid==a){
                        item_quantity = input[i].itemquantity ++;
                    // let indexValue=input.indexOf(input[i]);
                    //     input.splice(indexValue ,1,update());
                        condition_data = -1;
                        // break;
                 }
                 else{
                    item_quantity = 1;
                }
              
            }
        }else{
                 item_quantity = 1;

            }
        if(condition_data != -1){

            let data={'proid':proId,'proname':pro_name,'proprice':pro_price, 'itemquantity':item_quantity}
                input.push(data);
                return input;
        }
    // function update(){
    //     let data={'proid':proId,'proname':pro_name,'proprice':pro_price, 'itemquantity':item_quantity}
    //         return data;
    // }
  
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



function addTableRow(){
    let table=document.getElementById("table");
    let row =table.getElementsByTagName("tr");

        for(let j=1; j<row.length; j++){
            row[j].innerHTML ='';
        }
    let tempArray = JSON.parse(localStorage.getItem('product'));

        for (let i = 0; i < tempArray.length; i++) {
            let new_row = table.insertRow(table.length)
            let cell1 = new_row.insertCell(0);
            let cell2 = new_row.insertCell(1);
            let cell3 = new_row.insertCell(2);
            let cell4 = new_row.insertCell(3);
            let cell5 = new_row.insertCell(4);

                cell1.innerHTML = tempArray[i].proid;
                cell2.innerHTML =  tempArray[i].proname;
                cell3.innerHTML =  tempArray[i].proprice +" tk";
                cell4.innerHTML = tempArray[i].itemquantity +" kg";
            let id = tempArray[i].proid;
                cell5.innerHTML = '<a href="#" onClick="deleteRow(' + "'" + id + "'" + ')"; ><button type="button">Remove</button></a>';

         }
       
}

function deleteRow(id){
    let localArray = JSON.parse(localStorage.getItem('product'));
      for(let i=0; i<localArray.length; i++){
        if(localArray[i].proid == id){
            let indexValue=localArray.indexOf(localArray[i]);
                localArray. splice(indexValue ,1);
                localStorage.setItem("product" ,  JSON.stringify(localArray));

        }
      }
      addTableRow();
      result();
      totalPrice();
}

function totalPrice(){
    let input=getData();
    let total_price=0;

        for(let x=0; x<input.length; x++){
            let price=input[x].proprice * input[x].itemquantity;
            total_price= price + total_price;
        }

    document.getElementById("totalPrice").innerHTML=total_price;
}

function increaseQuantity(){
    let localArray = JSON.parse(localStorage.getItem('product'));
        for(let i=0; i<localArray.length; i++){

            if(a == localArray[i].proid){
                
                addCart();
            }
        }

}

function decreaseQuantity(){
    let localArray = JSON.parse(localStorage.getItem('product'));

    for(let i=0; i<localArray.length; i++){
        if(a == localArray[i].proid){
            if( localArray[i].itemquantity >1){

            in_localStorage_decrease();
            result();
            addTableRow(); 
            }   
        }

      
    }
}




function inputNum_decrease(a,proPrice,proName){

        let input=getData();
        let proId= a;
        let pro_price=document.getElementById(proPrice).innerText ;
        let pro_name=document.getElementById(proName).innerText ;
    
        let item_quantity=0;
        let condition_data=0;
        // let total_price=0;
            if(input.length !=0){
    
                for(let i=0; i<input.length; i++){
                    if(input[i].proid==a){
                            item_quantity = input[i].itemquantity-1;
                        let indexValue=input.indexOf(input[i]);
                            input.splice(indexValue ,1,update());
                            condition_data =-1;
                            break;
                    }else{
                        item_quantity = 1;
                    }
                  
                }
            }else{
                     item_quantity = 1;
    
                }
            if(condition_data != -1){
    
                let data={'proid':proId,'proname':pro_name,'proprice':pro_price, 'itemquantity':item_quantity}
                    input.push(data);
                    return input;
            }
        function update(){
            let data={'proid':proId,'proname':pro_name,'proprice':pro_price, 'itemquantity':item_quantity}
                return data;
        }
      
            return input;
    
           
    }
function in_localStorage_decrease(){
        let array_to_string = JSON.stringify( inputNum_decrease(a,proPrice,proName));
            localStorage.setItem('product', array_to_string);
           
            totalPrice();
    
}
    