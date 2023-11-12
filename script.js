function calculateGrade() {
    const writtenGrade = parseFloat(document.getElementById('writtenGrade').value.replace(',', '.'));
    const oralGrade = parseFloat(document.getElementById('oralGrade').value.replace(',', '.'));

    if (!isNaN(writtenGrade) && !isNaN(oralGrade)) {
        const finalGrade = (2/3 * writtenGrade) + (1/3 * oralGrade);
        document.getElementById('result').innerHTML = `Your Final Grade: ${finalGrade.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid grades.';
    }
}
