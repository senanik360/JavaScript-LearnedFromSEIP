function validate() {
    if (document.myForm.fname.value = "") {
        alert("Please provide your Name");
        document.myForm.fname.focus();
        return false;
    }
}