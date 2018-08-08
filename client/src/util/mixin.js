import { EventBus } from './event-bus';
const methods = {};

methods.datatable = (selector, options = {}, timeout = 500) => {
    setTimeout(function() {
        $(selector).DataTable(options);
    }, timeout);
};

methods.select2 = (selector, options = {}) => {
    $(selector).select2(options);
};

methods.datepicker = () => {};

methods.datetimepicker = () => {};

methods.editor = (selector, options = {}) => {
    $(selector).froalaEditor(options);
};

methods.addValidationRules = (vm, rules, exclude = []) => {
    let _ = require('lodash');
    for (let ruleName in rules) {
        if (rules.hasOwnProperty(ruleName)) {
            if (!exclude.includes(ruleName)) {
                let validationRuleObj = rules[ruleName];
                validationRuleObj.clonedState = _.cloneDeep(vm.$store.state);
                vm.$validator.extend(ruleName, validationRuleObj);
            }
        }
    }
};

export default {
    data: () => {
        return {
            get EventBus() {
                return EventBus;
            }
        }
    },

    methods
}
