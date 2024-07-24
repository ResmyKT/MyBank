/*function login(){
    if(acno.value in localStorage){
        alert("login successful")
        event.preventDefault();
        window.location="./trans.html"
    }
    
    
}*/
function login(){

    let Accountno=document.getElementById('acno').value
    let Password=document.getElementById('pw').value
   
    if(Accountno in localStorage){
     let out=JSON.parse(localStorage.getItem(Accountno))
     if(Accountno=="" || Password==""){
        alert("Please fill the fields")
     }
 
    else if(Accountno == out.accountno && Password==out.Password){
         
       
          alert("login Successfull")
          event.preventDefault();
          window.location='./trans.html'
        // console.log(Accountno);

         }
    else{
         alert("please type the correct account number and password")
         }


    }
    else{
        alert("user not registered")
    }
    
    
 }
