/**
 *  @NScriptType ClientScript
 *  @NApiVersion 2.x
 *  @NModuleScope SameAccount
 */

define([], function() {
    function showMessage() {
        alert('Hello World!');
    }

    return {
        pageInit: showMessage
    }
});

