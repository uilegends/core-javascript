var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var getButtonId = document.getElementById('submitId');
var checkBoxs = document.querySelectorAll('input[type=checkbox]');

function getcheckedValues() {
 const allChecked = Array.from(checkBoxs).filter((ck) => ck.checked).map((ck) => ck.value);
 if (allChecked && allChecked.length !== 0) {
  return allChecked;
 } else {
  return null;
 }
}
getButtonId.addEventListener('click', () => {
 document.getElementById('showResult').innerHTML = getcheckedValues();
});