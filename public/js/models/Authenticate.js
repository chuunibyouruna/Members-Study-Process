class Authenticate {
    constructor() {
        this.errors = {};
        this.validated = false;
    }

    checkEmptyField(key, message, field) {
        if (field.value.trim() === '') {
            this.failure(key, message, field);
        }
        else {
            this.success(key, '', field);
        }
    }

    showDialog(state, message, field = null) {
        console.log(`State: ${state}, message: ${message}`);
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