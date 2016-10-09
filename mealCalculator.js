
function Diner(dinerName, itemsOrdered) {
  this.name = dinerName;
  this.itemsOrdered = itemsOrdered;
}

Diner.prototype.mealTab = function() {
  var totalCost = 0;
  for (var i=0; i< this.itemsOrdered.length; i++) {
    totalCost += this.itemsOrdered[i].price;
  }
  return totalCost.toFixed(2);
}

Diner.prototype.tax = function() {
  var totalCost = this.mealTab();
  var tax = (totalCost * 0.06);
  return tax.toFixed(2);
}

Diner.prototype.tip = function() {
  var tip = this.mealTab() * 0.2;
  return tip.toFixed(2);
}

function TotalBill(diners) {
  this.diners = diners;
}

TotalBill.prototype.totalMealsAndTx = function() {
  var totalMealsAndTx = 0;
  for (var i=0; i< this.diners.length; i++) {
    totalMealsAndTx += +this.diners[i].mealTab() + +this.diners[i].tax();
  }
  return totalMealsAndTx.toFixed(2);
}

TotalBill.prototype.totalTip = function() {
  var totalTip = 0;
  for (var i=0; i< this.diners.length; i++) {
    totalTip += +this.diners[i].tip();
  }
  return totalTip.toFixed(2);
}

// --------------------------------------------


// Our Generic menu
var menuItems = {
  salad: {name: "salad", price: 9.50},
  soup: {name: "soup", price: 6.25},
  pizza: {name: "pizza", price: 10.95},
  wine: {name: "wine", price: 8.00},
  dessert: {name: "dessert", price: 7.50}
}

// dummy data for 2 diners

var meal1 = [menuItems.pizza, menuItems.salad, menuItems.wine];
var diner1 = new Diner("Lynne", meal1);

var meal2 = [menuItems.pizza, menuItems.soup, menuItems.dessert];
var diner2 = new Diner("Mostafa", meal2);

var meal3 = [menuItems.salad, menuItems.soup, menuItems.dessert];
var diner3 = new Diner("Aly", meal3);

var diners = [diner1, diner2, diner3];

var TotalTab = new TotalBill(diners);

console.log(diner1.name + '\'s meal is ' + diner1.mealTab() + ', plus ' + diner1.tax() + ' tax for a total of ' + (+diner1.mealTab() +  +diner1.tax()));
console.log(diner1.name + ' also owes a $' + diner1.tip() + ' tip.');
console.log(diner2.name + '\'s meal is ' + diner2.mealTab() + ', plus ' + diner2.tax() + ' tax for a total of ' + (+diner2.mealTab() +  +diner2.tax()));
console.log(diner2.name + ' also owes a $' + diner2.tip() + ' tip.');
console.log(diner3.name + '\'s meal is ' + diner3.mealTab() + ', plus ' + diner3.tax() + ' tax for a total of ' + (+diner3.mealTab() +  +diner3.tax()));
console.log(diner3.name + ' also owes a $' + diner3.tip() + ' tip.');

console.log('The diners at the table are ');
for (var i=0; i < TotalTab.diners.length; i++) {
     console.log(TotalTab.diners[i].name + ', ');
}
console.log('The total cost for all meals, plus tax, is: ' + TotalTab.totalMealsAndTx());
console.log('The total tip owed by all diners is: ' + TotalTab.totalTip());
