const checkBoxes = document.querySelectorAll('input[type=checkbox]');
const radios = document.querySelectorAll('input[type=radio]');
const submitBtn = document.getElementById('formSubmit');

submitBtn.addEventListener('click', () => {
 const checkboxSelected = Array.from(checkBoxes).filter((ck) => ck.checked).map((ck) => ck.value);
 const radioSelected = Array.from(radios).find(radio => radio.checked);

 if (checkboxSelected && checkboxSelected.length > 0) {
  document.getElementById('showResult').innerHTML = checkboxSelected;
  document.getElementById('checkboxValidate').style.display = 'none';
  submitBtn.removeAttribute("disabled");
 } else {
  document.getElementById('checkboxValidate').innerHTML = "Please select at least one value";
  document.getElementById('showResult').innerHTML = '';
 }

 if (radioSelected && radioSelected.value) {
  document.getElementById('result').innerHTML = radioSelected.value;
  document.getElementById('mandatory').style.display = 'none';
 } else {
  document.getElementById('mandatory').innerHTML = 'Please select any one!';
 }

});


function resetForm() {
 window.location.reload();
}