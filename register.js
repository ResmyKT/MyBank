
/*function register(){
    event.preventDefault();
    user={
     
        name:username.value,
    
        accountnumber:acno.value,
        password:pw.value,
      
    }
    if(user.name=="" ||user.accountnumber==""|| user.password==""){
        alert("please fill missing fields")
    }
    else{
        if(user.accountnumber in localStorage){
            alert("user already exists")
        }
        else{
            localStorage.setItem(user.accountnumber,JSON.stringify(user))
            localStorage.setItem(user.password,JSON.stringify(user))
            alert("Registration Successful")
           
        }
    }
  

    
}
let uname=document.getElementById('username').value
console.log(uname)
localStorage.setItem('USERNAME',uname)

function signin(){
  
    event.preventDefault();
     window.location="./login.html"
}*/
function register(){
  
    let username=document.getElementById('username').value
    let accno=document.getElementById('acno').value
    let password=document.getElementById('pw').value
    let balance=0;
    user={
        User:username,
        accountno:accno,
        Password:password,
        balance:balance
    }
    if(user.accountno in localStorage){
        alert("User already registered")
    }
    else if(user.User=="" || user.accountno=="" || user.Password==""){
        alert("please fill all fields")
    }
    else{
        window.localStorage.setItem(user.accountno,JSON.stringify(user))
        
        alert("Registration successfull")
        
      
        
    }
    

}
function signin(){
  
    event.preventDefault();
     window.location="./login.html"
}