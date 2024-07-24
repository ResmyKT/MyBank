
/*uname=localStorage.getItem('USERNAME')//changing the h1 tag welcome user to welcome nameof the user
console.log(uname)
head1.innerHTML=`Welcome ${uname}`*/
function deposit(){
    let depoamount = document.getElementById('amountdepo').value
    let depoacno = document.getElementById('acnodepo').value
    if(depoacno in localStorage){
        Accountdetails=JSON.parse(localStorage.getItem(depoacno))
        let balanceAmount = parseInt(Accountdetails.balance)
        let depositAmount = parseInt(depoamount)
 
    if (depositAmount<=0) {
        alert("value cannot be empty or negetive")
    }else{
        balanceAmount = balanceAmount + depositAmount
        Accountdetails.balance = balanceAmount
        // console.log(user.balance);
        localStorage.setItem(depoacno, JSON.stringify(Accountdetails))
        deporesult.innerHTML = `Your current balance ${balanceAmount}`

    }
}
else{
    alert("incorrect Account number")
}


}
let form = document.querySelector('.form')

function withdraw() {
    let withdrawAmount = document.getElementById('amountwith').value
    let withdrawAccno = document.getElementById('acnowith').value

    // console.log(Account);
    if (withdrawAccno in localStorage) {
        let Account = JSON.parse(localStorage.getItem(withdrawAccno))
        if (withdrawAmount <= Account.balance) {
            // console.log(typeof(withdrawAmount));//doubt idh string aanenkil eghene aan if contitionil adh work aavunne
            alert(`bank balance before withdrawal ${Account.balance}`)
            alert(`Withdraw amount ${withdrawAmount}`)
            Account.balance -= withdrawAmount
            // console.log(Account.balance);
            localStorage.setItem(withdrawAccno, JSON.stringify(Account))

            withresult.innerHTML = `Your current balance is ${Account.balance}`
            alert("your amount  is successfully withdrawn")
            alert(`After withdrawal your account balance is ${Account.balance}`)
        }
        else{
            alert("insufficient balance")
        }
    }
    else{
        alert("incorrect account number")
    }
}


function logout() {
    localStorage.clear()
    window.location = './index.html'
}

