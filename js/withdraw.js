document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('withdraw button clicked')
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    // console.log(newWithdrawAmount);
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithDrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithDrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newbalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newbalanceTotal);
});