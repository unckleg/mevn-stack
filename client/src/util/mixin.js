import store from '@/store';
import { EventBus } from './event-bus';

const CUSTOM_COMMIT_REQUIRED_ATTRS_ERROR = 'You must provide state object holder name & state namespace ' +
                                           'for mutation to be able to commit changes to state.';

const methods = {};
methods.datatable = (selector, options = {}, timeout = 500) => {
    setTimeout(function() {
        $(selector).DataTable(options);
    }, timeout);
};

methods.select2 = (selector, options = {}) => {
    let select2 = $(selector).select2(options);
    select2.on('select2:select select2:unselect', (e) => {
        if (!methods._containsRequiredCustomCommitAttributes($(selector))) {
            console.error(CUSTOM_COMMIT_REQUIRED_ATTRS_ERROR);
            return;
        }

        let stateNamespace = $(selector).data('state-namespace');
        let stateObjectHolderName = $(selector).data('state-mutator');
        let selectorFieldNameAttr = $(selector).attr('name');
        store.commit(stateNamespace + '/updateField', {
            path: stateObjectHolderName + '.' + selectorFieldNameAttr,
            value: $(selector).val()
        });
    });
};

methods.tagsInput = (selector, options = {}) => {
    $(selector).tagsinput(options);
    $(selector).on('itemAdded', (event) => {
        if (!methods._containsRequiredCustomCommitAttributes($(selector))) {
            console.error(CUSTOM_COMMIT_REQUIRED_ATTRS_ERROR);
            return;
        }

        let stateNamespace = $(selector).data('state-namespace');
        let stateObjectHolderName = $(selector).data('state-mutator');
        let selectorFieldNameAttr = $(selector).attr('name');
        store.commit(stateNamespace + '/updateField', {
            path: stateObjectHolderName + '.' + selectorFieldNameAttr,
            value: event.currentTarget.value.split(',')
        });
    });
};

methods.initializeVendors = (vendors) => {
    for (let key in vendors) {
        if (vendors.hasOwnProperty(key)) {
            let currentVendor = vendors[key];
            methods[currentVendor.vendor](
                currentVendor.selector,
                currentVendor.options
            );
        }
    }
};

methods.datepicker = (selector, options = {}) => {
    $(selector).datepicker(options);
};

methods.datetimepicker = (selector, options = {}) => {
    let datetimepicker = $(selector).datetimepicker(options);
    datetimepicker.on('dp.change', (e) => {
        if (!methods._containsRequiredCustomCommitAttributes($(selector))) {
            console.error(CUSTOM_COMMIT_REQUIRED_ATTRS_ERROR);
            return;
        }

        let stateNamespace = $(selector).data('state-namespace');
        let stateObjectHolderName = $(selector).data('state-mutator');
        let selectorFieldNameAttr = $(selector).attr('name');
        store.commit(stateNamespace + '/updateField', {
            path: stateObjectHolderName + '.' + selectorFieldNameAttr,
            value: e.currentTarget.value
        });
    });
};

methods.editor = (selector, options = {}) => {
    let editor = $(selector).froalaEditor(options);
    editor.on('froalaEditor.contentChanged', () => {
        if (!methods._containsRequiredCustomCommitAttributes($(selector))) {
            console.error(CUSTOM_COMMIT_REQUIRED_ATTRS_ERROR);
            return;
        }

        let stateNamespace = $(selector).data('state-namespace');
        let stateObjectHolderName = $(selector).data('state-mutator');
        let selectorFieldNameAttr = $(selector).attr('name');
        store.commit(stateNamespace + '/updateField', {
            path: stateObjectHolderName + '.' + selectorFieldNameAttr,
            value: editor.froalaEditor('html.get')
        });
    });
};

methods._containsRequiredCustomCommitAttributes = (jQueryElement) => {
    let stateNamespace = jQueryElement.data('state-namespace');
    let stateObjectHolderName = jQueryElement.data('state-mutator');
    let selectorFieldNameAttr = jQueryElement.attr('name');

    return (stateObjectHolderName && stateObjectHolderName.length > 1 &&
            stateNamespace && stateNamespace.length > 1 &&
            selectorFieldNameAttr && selectorFieldNameAttr.length > 1);
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
