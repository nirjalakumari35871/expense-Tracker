let totalIncome = 0;
let totalExpense = 0;

function addTransaction() {

    let title = document.getElementById("title").value;
    let amount = Number(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if (title === "" || amount <= 0) {
        alert("Please enter valid details!");
        return;
    }

    if (type === "income") {
        totalIncome += amount;
    } else {
        totalExpense += amount;
    }

    let balance = totalIncome - totalExpense;

    document.getElementById("income").innerText = totalIncome;
    document.getElementById("expense").innerText = totalExpense;
    document.getElementById("balance").innerText = balance;

    let li = document.createElement("li");
    li.innerText = title + " - ₹" + amount + " - " + type;

    document.getElementById("transactionList").appendChild(li);

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
}