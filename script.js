// Variables with descriptive names
var sessionDurationInMinutes = 50; // integer data type
var therapistName = "Dr. Smith"; // string data type

// Mathematical operation
var sessionCostPerMinute = 2; // integer data type
var totalCost = sessionDurationInMinutes * sessionCostPerMinute;

// Decision making with if-else statement
if (totalCost > 100) {
    var costMessage = "The session is quite expensive.";
} else {
    var costMessage = "The session cost is reasonable.";
}

// Using logical operator (AND) for complex condition evaluation
var isExperiencedTherapist = true;
var isAffordable = totalCost <= 100;
if (isExperiencedTherapist && isAffordable) {
    var recommendation = "Highly recommended due to experience and affordability.";
} else {
    var recommendation = "Consider your options carefully.";
}

// Output to the console
console.log("Therapist: " + therapistName);
console.log("Session Duration: " + sessionDurationInMinutes + " minutes");
console.log("Total Cost: $" + totalCost);
console.log(costMessage);
console.log(recommendation);

// Output to the DOM
document.getElementById("sessionSummary").innerHTML = 
    "Therapist: " + therapistName + "<br>" +
    "Session Duration: " + sessionDurationInMinutes + " minutes<br>" +
    "Total Cost: $" + totalCost + "<br>" +
    costMessage + "<br>" +
    recommendation;
