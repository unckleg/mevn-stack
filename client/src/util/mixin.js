const methods = {};

methods.datatable = (selector, options = {}, timeout = 500) => {
    setTimeout(function() {
        $(selector).DataTable(options);
    }, timeout);
};

export default {
    methods
}
