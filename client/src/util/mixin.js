import { EventBus } from './event-bus';
const methods = {};

methods.datatable = (selector, options = {}, timeout = 500) => {
    setTimeout(function() {
        $(selector).DataTable(options);
    }, timeout);
};

methods.addValidationRules = (vm, rules, exclude = []) => {
    let _ = require('lodash');
    for (let ruleName in rules) {
        if (!exclude.includes(ruleName)) {
            let validationRuleObj = rules[ruleName];
            validationRuleObj.clonedState = _.cloneDeep(vm.$store.state);
            vm.$validator.extend(ruleName, validationRuleObj);
        }
    }
};

export default {
    data: function() {
        return {
            get EventBus() {
                return EventBus;
            }
        }
    },

    methods
}
