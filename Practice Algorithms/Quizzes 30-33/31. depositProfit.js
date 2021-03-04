// 31. You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

function depositProfit(deposit, rate, threshold) {
    // initial deposit + yearly increase
    let savings = deposit;
    // number of years taken to reach threshold
    let years = 0;
    // loops until savings surpass threshold
    while (savings < threshold) {
        // adding to savings at a yearly rate
        savings += savings*(rate / 100);
        // counts 1 year and adds to number of years 
        years++;
    }
    return years;
}