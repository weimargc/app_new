import {createModel, R} from "use-model-validation";

export const nested = (ref, rules) => {
    const nested = createModel({rules: rules});
    let error = [];
    return [
        R.test(value => {
            value = value || {};
            const valueElement = value[ref];
            const instance = nested.fresh(valueElement);
            const { errors, valid } = instance.validate();
            error[0] = errors[Object.keys(errors)[0]]
            return valid
        }, error)
    ];
}

export const model = (rules) => {
    return (data) => {
        const model = createModel({rules: rules}).fresh(data);
        return {model, data};
    }
}
