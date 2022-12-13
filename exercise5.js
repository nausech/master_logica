function percentageOf(number, percentage) {
    return ` The ${percentage}% of ${number} is  ${number * (percentage / 100)}`;
}

console.log(
    percentageOf(2000, 50),
)