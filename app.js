const expenses = [];

function updateGreeting() {
  const hour = new Date().getHours();
  const message = hour < 12 ? "Good Morning" :
                  hour < 18 ? "Good Afternoon" : "Good Evening";
  document.getElementById("welcomeMessage").textContent = `${message}, welcome to Budget Buddy!`;
}

function addExpense() {
  const description = document.getElementById("description").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value;
  const error = document.getElementById("error");

  if (!description || !amount || amount <= 0 || !category) {
    error.textContent = "Please fill all fields correctly.";
    return;
  }

  const expense = {
    id: Date.now(),
    description,
    amount,
    category,
    timestamp: new Date().toISOString()
  };

  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses)); // ⬅️ Save to localStorage
  error.textContent = "";
  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";

  renderExpenses();
  updateTotal();
}

function deleteExpense(id) {
  const index = expenses.findIndex(exp => exp.id === id);
  if (index !== -1) {
    expenses.splice(index, 1);
    renderExpenses();
    updateTotal();
  }
}

function renderExpenses(filtered = "All") {
  const list = document.getElementById("expenseItems");
  list.innerHTML = "";

  const filteredExpenses = filtered === "All" ? expenses : expenses.filter(e => e.category === filtered);

  filteredExpenses.forEach(exp => {
    const li = document.createElement("li");
    li.innerHTML = `${exp.description} - $${exp.amount.toFixed(2)} <em>(${exp.category})</em>
      <button onclick="deleteExpense(${exp.id})">🗑️</button>`;
    list.appendChild(li);
  });
}

function updateTotal() {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  document.getElementById("totalAmount").textContent = total.toFixed(2);
}

function filterExpenses() {
  const category = document.getElementById("filter").value;
  renderExpenses(category);
}

updateGreeting();
renderExpenses();

const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
if (savedExpenses) {
  expenses.push(...savedExpenses);
  renderExpenses();
  updateTotal();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contactForm").addEventListener("submit", handleSubmit);
});