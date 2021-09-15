function depositWithdraw(inputid, totalId) {
    const InputText = document.getElementById(inputid);
    const input = InputText.value;
    if (input == false || input < 0) {
        return alert('invalid input')
    }
    const amount = parseFloat(input)
    InputText.value = ''

    const totalAmountId = document.getElementById(totalId);
    const totalAmountText = totalAmountId.innerHTML;
    const totalAmount = parseFloat(totalAmountText)

    totalAmountId.innerHTML = amount + totalAmount;

    currentBalance(amount, totalId)
};

function currentBalance(amount, totalAmount) {
    const balaceId = document.getElementById('balance-total');
    const balanceText = balaceId.innerHTML;
    const balance = parseFloat(balanceText)
    balaceId.innerHTML = amount + balance;

    if (totalAmount === 'withdraw-total') {
        balaceId.innerHTML = balance - amount;
    }

}
