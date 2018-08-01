import { EventBus } from './event-bus';
const methods = {};

methods.datatable = (selector, options = {}, timeout = 500) => {
    setTimeout(function() {
        $(selector).DataTable(options);
    }, timeout);
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
