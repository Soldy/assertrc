/*
 *  @Soldy\assertrc\2021.02.07\GPL3
 */
'use strict';

/*
 * @prototype
 */
const assertBase = function (){
    /*
     * @param {any} value
     * @param {string} rule
     * @param {any} sample
     * @public
     * @return {boolean}
     */
    this.check = function(value, rule, sample){
        errorClean();
        if(typeof value === 'undefined')
            errorAdd(' value not defined ');
        if(typeof rule === 'undefined')
            errorAdd(' rule not defined ');
        if(errorCheck()){
            return false;
        }
        if(typeof _dictonary[rule.toLowerCase()] === 'undefined')
            errorAdd(' Rule not exist ');
        if(errorCheck())
            return false;
        return _check(value, rule, sample);
    };
    /*
     * @param {object} testn
     * @public
     * @return boolean
     */
    this.tests = function(testIn){
        _tests = testIn;
        return true;
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.equal = function(value,sample){
        return _equal(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.equalType = function(value,sample){
        return _equalType(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.equalJson = function(value,sample){
        return _equalJson(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.notEqual = function(value,sample){
        return _notEqual(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.greater = function(value,sample){
        return _greater(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.less = function(value,sample){
        return _less(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.length = function(value,sample){
        return _length(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.valueEqual = function(value,sample){
        return _valueEqual(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.valueEqualType = function(value,sample){
        return _valueEqualType(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.valueNotEqual = function(value,sample){
        return _valueNotEqual(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.valueNotEqualType = function(value,sample){
        return _valueNotEqualType(value,sample);
    };
    /*
     * @private
     * @var {object}
     */
    let _tests = {};
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @var {boolean}
     */
    const _equal = function(value,sample){
        return (value == sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _equalType = function(value,sample){
        return (value === sample);
    };
    /*
     * @param {object} value
     * @param {object} sample
     * @private
     * @return {boolean}
     */
    const _equalJson = function(value,sample){
        return (JSON.stringify(value) === JSON.stringify(sample));
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _notEqual = function(value,sample){
        return (value != sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _notEqualType = function(value,sample){
        return (value !== sample);
    };
    /*
     * @param {number} value
     * @param {number} sample
     * @private
     * @return {boolean}
     */
    const _greater = function(value,sample){
        if( typeof value !== 'number' )
            errorAdd(' value not a number \n');
        if (typeof sample !== 'number' )
            errorAdd(' Sample not a number \n');
        if(errorCheck())
            return false;
        return (value > sample);
    };
    /*
     * @param {number} value
     * @param {number} sample
     * @private
     * @return {boolean}
     */
    const _less = function(value,sample){
        if( typeof value !== 'number' )
            errorAdd(' value not a number \n');
        if (typeof sample !== 'number' )
            errorAdd(' Sample not a number \n');
        if(errorCheck())
            return false;
        return (value < sample);
    };
    /*
     * @param {string} value
     * @param {integer} sample
     * @private
     * @return {boolean}
     */
    const _length = function(value,sample){
        if(typeof value !== 'string' )
            errorAdd(' value not a string \n');
        if(isNaN(sample))
            errorAdd(' sample not a number ');
        if(errorCheck())
            return false;
        if(typeof sample == 'string')
            sample = sample.length;
        if(Number.isInteger(sample) === false)
            return false;
        return (value.length === sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private     * @return {boolean}
     */
    const _instanceof = function(value,sample){
        return (value instanceof sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _valueEqual = function(value,sample){
        return (value == _tests[sample].value);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _valueEqualType = function(value,sample){
        return (value === _tests[sample].value);
    };
    /*
     * @param {object} value
     * @param {object} sample
     * @private
     * @return {boolean}
     */
    const _valueEqualJson = function(value,sample){
        return (JSON.stringify(value) === JSON.stringify(_tests[sample].value));
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _valueNotEqual = function(value,sample){
        return (value != _tests[sample].value);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _valueNotEqualType = function(value,sample){
        return (value !== _tests[sample].value);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _resultEqual = function(value,sample){
        return (value == sample());
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _resultEqualType = function(value,sample){
        return (value === sample());
    };
    /*
     * @param {object} value
     * @param {object} sample
     * @private
     * @return {boolean}
     */
    const _resultEqualJson = function(value,sample){
        return (JSON.stringify(value) === JSON.stringify(sample()));
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _resultNotEqual = function(value,sample){
        return (value != sample());
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _resultNotEqualType = function(value,sample){
        return (value !== sample());
    };

    /*
     * Blank result test error type
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _valueError = function(value,sample){
        return true;
    };
    /*
     * Blank result test not error type
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const _valueNotError = function(value,sample){
        return true;
    };
    /*
     * @param {any} value
     * @param {string} rule
     * @param {any} sample
     * @private
     * @return {boolean}
    */
    const _check = function(value,rule,sample){
        return _collection[
            _dictonary[
                rule.toLowerCase()
            ]
        ](value, sample);
    };
    /*
     * @private
     */
    const _collection = {
        'equal'               : _equal,
        'notEqual'            : _notEqual,
        'equalType'           : _equalType,
        'notEqualType'        : _notEqualType,
        'equalJson'           : _equalJson,
        'greater'             : _greater,
        'less'                : _less,
        'length'              : _length,
        'valueEqual'          : _valueEqual,
        'valueNotEqual'       : _valueNotEqual,
        'valueEqualType'      : _valueEqualType,
        'valueNotEqualType'   : _valueNotEqualType,
        'valueEqualJson'      : _valueEqualJson,
        'resultEqual'         : _resultEqual,
        'resultNotEqual'      : _resultNotEqual,
        'resultEqualType'     : _resultEqualType,
        'resultNotEqualType'  : _resultNotEqualType,
        'resultEqualJson'     : _resultEqualJson,
        'instanceof'          : _instanceof,
        'error'               : _valueError,
        'notError'            : _valueNotError
    };
    /*
     * @private
     */
    const _dictonary = {
        '=='                  : 'equal',
        'eq'                  : 'equal',
        'e'                   : 'equal',
        'equal'               : 'equal',
        'equale'              : 'equal',
        '!=='                 : 'notEqual',
        'neq'                 : 'notEqual',
        'ne'                  : 'notEqual',
        'notequal'            : 'notEqual',
        'notequale'           : 'notEqual',
        '==='                 : 'equalType',
        'eqt'                 : 'equalType',
        'et'                  : 'equalType',
        'qt'                  : 'equalType',
        'equaltype'           : 'equalType',
        'equaletype'          : 'equalType',
        '!==='                : 'notEqualType',
        'neqt'                : 'notEqualType',
        'net'                 : 'notEqualType',
        'nqt'                 : 'notEqualType',
        'notequaltype'        : 'notEqualType',
        'notequaletype'       : 'notEqualType',
        'j=='                 : 'equalJson',
        'jeq'                 : 'equalJson',
        'je'                  : 'equalJson',
        'jsonequal'           : 'equalJson',
        'jsonequale'          : 'equalJson',
        '==j'                 : 'equalJson',
        'eqj'                 : 'equalJson',
        'ej'                  : 'equalJson',
        'equaljson'           : 'equalJson',
        'equalejson'          : 'equalJson',
        '>'                   : 'greater',
        'greater'             : 'greater',
        'more'                : 'greater',
        'higher'              : 'greater',
        'bigger'              : 'greater',
        'biger'               : 'greater',
        'larger'              : 'greater',
        '<'                   : 'less',
        'less'                : 'less',
        'lower'               : 'less',
        'smaller'             : 'less',
        'smaler'              : 'less',
        'length'              : 'length',
        'v=='                 : 'valueEqual',
        'veq'                 : 'valueEqual',
        've'                  : 'valueEqual',
        'valueequal'          : 'valueEqual',
        'valueequale'         : 'valueEqual',
        'v!=='                : 'valueNotEqual',
        'vneq'                : 'valueNotEqual',
        'vne'                 : 'valueNotEqual',
        'valuenotequal'       : 'valueNotEqual',
        'valuenotequale'      : 'valueNotEqual',
        'v==='                : 'valueEqualType',
        'veqt'                : 'valueEqualType',
        'vet'                 : 'valueEqualType',
        'vqt'                 : 'valueEqualType',
        'valueequaltype'      : 'valueEqualType',
        'valueequaletype'     : 'valueEqualType',
        'v!==='               : 'valueNotEqualType',
        'vneqt'               : 'valueNotEqualType',
        'vnet'                : 'valueNotEqualType',
        'vnqt'                : 'valueNotEqualType',
        'valuenotequaltype'   : 'valueNotEqualType',
        'valuenotequaletype'  : 'valueNotEqualType',
        'vj=='                : 'valueEqualJson',
        'vjeq'                : 'valueEqualJson',
        'vje'                 : 'valueEqualJson',
        'valuejsonequal'      : 'valueEqualJson',
        'valuejsonequale'     : 'valueEqualJson',
        'v==j'                : 'valueEqualJson',
        'veqj'                : 'valueEqualJson',
        'vej'                 : 'valueEqualJson',
        'valueequaljson'      : 'valueEqualJson',
        'valueequalejson'     : 'valueEqualJson',
        'r=='                 : 'resultEqual',
        'req'                 : 'resultEqual',
        're'                  : 'resultEqual',
        'resultequal'         : 'resultEqual',
        'resultequale'        : 'resultEqual',
        'r!=='                : 'resultNotEqual',
        'rneq'                : 'resultNotEqual',
        'rne'                 : 'resultNotEqual',
        'resultnotequal'      : 'resultNotEqual',
        'resultnotequale'     : 'resultNotEqual',
        'r==='                : 'resultEqualType',
        'reqt'                : 'resultEqualType',
        'ret'                 : 'resultEqualType',
        'rqt'                 : 'resultEqualType',
        'resultequaltype'     : 'resultEqualType',
        'resultequaletype'    : 'resultEqualType',
        'r!==='               : 'resultNotEqualType',
        'rneqt'               : 'resultNotEqualType',
        'rnet'                : 'resultNotEqualType',
        'rnqt'                : 'resultNotEqualType',
        'resultnotequaltype'  : 'resultNotEqualType',
        'resultnotequaletype' : 'resultNotEqualType',
        'rj=='                : 'resultEqualJson',
        'rjeq'                : 'resultEqualJson',
        'rje'                 : 'resultEqualJson',
        'resultjsonequal'     : 'resultEqualJson',
        'resultjsonequale'    : 'resultEqualJson',
        'r==j'                : 'resultEqualJson',
        'reqj'                : 'resultEqualJson',
        'rej'                 : 'resultEqualJson',
        'resultequaljson'     : 'resultEqualJson',
        'resultequalejson'    : 'resultEqualJson',
        'instanceof'          : 'instanceof',
        'instance'            : 'instanceof',
        'is'                  : 'instanceof',
        'error'               : 'error',
        'noterror'            : 'notError',
        '!error'              : 'notError'
    };
    /*
     * @private
     */
    let errors = [];
    /*
     * @parm string {err}
     * @private
     * @return {boolean}
     */
    const errorAdd = function(err){
        errors.push(err);
        return true;
    };
    /*
     * @parm string {err}
     * @private
     * @return {boolean}
     */
    const errorCheck = function(){
        if(errors.length>0)
            return true;
        return false;
    };
    /*
     * @private
     */
    const errorClean = function(){
        errors = [];
    };
};

exports.base = assertBase;


