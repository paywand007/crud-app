import { defineRule } from 'vee-validate';
import { required} from "@vee-validate/rules";
defineRule('required', required);

defineRule('age',value => {

    if ( !(value >17 && value < 66)){
        return 'This field must be a valid email';
    }
    return true;
})
defineRule('emailOrPhone', value => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true;
    }
    // Check! if email
    if (!/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(value)) {
        return 'This field must be a valid email';
    }
    return true;
});









