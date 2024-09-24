
 document.querySelectorAll('.donation-card button').forEach(button => {
    button.addEventListener('click', function() {
        let input = this.previousElementSibling;
        let amount = input.value;
        
        if (amount && !isNaN(amount)) {
            alert(`Thank you for donating ${amount} BDT!`);
            input.value = ''; 
        } else {
            alert('Please enter a valid amount.');
        }
    });
});