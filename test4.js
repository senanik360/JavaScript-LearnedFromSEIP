function validate() {
    if (document.myForm.in.value.toUpperCase() == "BANGLADESH") {
        document.body.style.backgroundColor = "red";
        return false;
    }
    else if (document.myForm.in.value== "") {
        alert("Write Bangladesh");
        return false;
    }
    else {
        alert("Write Bangladesh");
    }
}

