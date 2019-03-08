class Validator {
    constructor() {
        this.errors = {};
        this.validated = false;
    }

    checkEmptyField(key, message, field) {
        if (field.value === '') {
            this.failure(key, message, field);
            return false;
        }
        else {
            this.success(key, '', field);
            return true;
        }
    }

    checkSpecialCharacters(key, message, field) {
        const regex = /[!@#$%^&*(),.?":{}|<>~\s]/g;
        if (regex.test(field.value)) {
            this.failure(key, message, field);
            return false;
        }
        else {
            this.success(key, '', field);
            return true;
        }
    }

    checkEmail = (key, message, field) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(field.value)) {
            this.success(key, '', field);
            return true;
        }
        else {
            this.failure(key, message, field);
            return false;
        }
    }

    compareToFirstPassword(key, message, field1, field2) {
        if (field2.value !== field1.value) {
            this.failure(key, message, field2);
            return false;
        }
        else {
            this.success(key, '', field2);
            return true;
        }
    }

    showDialog(state, message, field = null) {
        // console.log(`State: ${state}, message: ${message}`);
        const formGroup = field.parentElement;
        const messageText = formGroup.querySelector(".message");
        if (field !== null && state === 'failure') {
            messageText.innerHTML = message;
            formGroup.classList.add("in-valid");
        }
        else if (field !== null && state === 'success') {
            messageText.innerHTML = '';
            formGroup.classList.remove("in-valid");
        }
    }

    failure(key, message, field) {
        this.errors[key] = message;
        this.validated = false;
        this.showDialog('failure', message, field);
    }

    success(key, message, field) {
        delete this.errors[key];
        this.showDialog('success', message, field);
    }
}