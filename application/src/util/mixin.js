const methods = {};

methods.datatable = (selector, options = {}) => {
    setTimeout(function() {
        $(selector).DataTable(options);
    }, 500);
};

export default {
    methods
}
