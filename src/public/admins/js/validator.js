const Validator = (options) => {
    const getParent = (element, selector) => {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    };

    const formElement = document.querySelector(options.form);

    let selectorRules = {};

    const validate = (inputElement, rule) => {
        const errorElement = getParent(
            inputElement,
            options.formGroupSelector
        ).querySelector(options.errorSelector);
        let errorMessage;
        const rules = selectorRules[rule.selector];
        if (rules) {
            for (let i = 0; i < rules.length; i++) {
                switch (inputElement.type) {
                    case 'checkbox':
                    case 'radio':
                        errorMessage = rules[i](
                            formElement.querySelector(
                                rule.selector + ':checked'
                            )
                        );
                        break;
                    default:
                        errorMessage = rules[i](inputElement.value);
                }
                if (errorMessage) break;
            }
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add(
                'invalid'
            );
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove(
                'invalid'
            );
        }

        return !errorMessage;
    };

    if (formElement) {
        // Handle submit
        formElement.onsubmit = (e) => {
            e.preventDefault();

            let isFormValid = true;

            options.rules.forEach((rule) => {
                const inputElement = formElement.querySelector(rule.selector);
                let isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    let enableInputs = formElement.querySelectorAll(
                        '[name]:not([disabled])'
                    );

                    const inputValues = Array.from(enableInputs).reduce(
                        (values, input) => {
                            switch (input.type) {
                                case 'radio':
                                    values[input.name] =
                                        formElement.querySelector(
                                            'input[name="' +
                                                input.name +
                                                '"]:checked'
                                        ).value;
                                    break;
                                case 'checkbox':
                                    if (!input.matches(':checked')) {
                                        values[input.name] = '';
                                        return values;
                                    }

                                    if (!Array.isArray(values[input.name])) {
                                        values[input.name] = [];
                                    }

                                    values[input.name].push(input.value);
                                    break;
                                case 'file':
                                    values[input.name] = input.files;
                                    break;
                                default:
                                    values[input.name] = input.value;
                            }
                            input.value = '';
                            return values;
                        },
                        {}
                    );
                    selectorRules = {};
                    options.onSubmit(inputValues);
                } else {
                    formElement.submit();
                }
            }
        };

        options.rules.forEach((rule) => {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            const inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach((inputElement) => {
                if (inputElement) {
                    const errorElement = getParent(
                        inputElement,
                        options.formGroupSelector
                    ).querySelector(options.errorSelector);

                    inputElement.onblur = async () => {
                        await validate(inputElement, rule);
                    };

                    inputElement.oninput = () => {
                        errorElement.innerText = '';
                        getParent(
                            inputElement,
                            options.formGroupSelector
                        ).classList.remove('invalid');
                    };
                }
            });
        });
    }
};

Validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        },
    };
};

Validator.isEmail = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)
                ? undefined
                : message || 'Vui lòng nhập email';
        },
    };
};

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min
                ? undefined
                : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        },
    };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue()
                ? undefined
                : message || 'Giá trị nhập vào không chính xác';
        },
    };
};
