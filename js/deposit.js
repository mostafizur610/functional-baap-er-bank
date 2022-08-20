function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;

}


document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('clicked deposit button')
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    // console.log(previousDepositTotal);
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newbalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newbalanceTotal);
});