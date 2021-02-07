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
        if(typeof sample === 'undefined')
            errorAdd(' sample not defined ');
        if(errorCheck()){
            return false;
        }
        if(typeof collection[rule.toLowerCase()] === 'undefined')
            errorAdd(' Rule not exist ');
        if(errorCheck())
            return false;
        return collection[rule.toLowerCase()](value, sample);
    };
    /*
     * @param {object} testn
     * @public
     * @return boolean
     */
    this.tests = function(testIn){
        tests = testIn;
        return true;
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.equal = function(value,sample){
        return equal(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.equalType = function(value,sample){
        return equalType(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.equalJson = function(value,sample){
        return equalJson(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.notEqual = function(value,sample){
        return notEqual(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.greater = function(value,sample){
        return greater(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.less = function(value,sample){
        return less(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.length = function(value,sample){
        return length(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.valueEqual = function(value,sample){
        return valueEqual(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.valueEqualType = function(value,sample){
        return valueEqualType(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.valueNotEqual = function(value,sample){
        return valueNotEqual(value,sample);
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @public
     * @var {boolean}
     */
    this.valueNotEqualType = function(value,sample){
        return valueNotEqualType(value,sample);
    };
    /*
     * @private
     * @var {object}
     */
    let tests = {};
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @var {boolean}
     */
    const equal = function(value,sample){
        if( value == sample )
            return true;
        return false;
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const equalType = function(value,sample){
        if( value === sample )
            return true;
        return false;
    };
    /*
     * @param {object} value
     * @param {object} sample
     * @private
     * @return {boolean}
     */
    const equalJson = function(value,sample){
        if( JSON.stringify(value) === JSON.stringify(sample) )
            return true;
        return false;
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const notEqual = function(value,sample){
        if( value != sample )
            return true;
        return false;
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const notEqualType = function(value,sample){
        if( value !== sample )
            return true;
        return false;
    };
    /*
     * @param {number} value
     * @param {number} sample
     * @private
     * @return {boolean}
     */
    const greater = function(value,sample){
        if( typeof value !== 'number' )
            errorAdd(' value not a number \n');
        if (typeof sample !== 'number' )
            errorAdd(' Sample not a number \n');
        if(errorCheck())
            return false;
        if( value > sample )
            return true;
        return false;
    };
    /*
     * @param {number} value
     * @param {number} sample
     * @private
     * @return {boolean}
     */
    const less = function(value,sample){
        if( typeof value !== 'number' )
            errorAdd(' value not a number \n');
        if (typeof sample !== 'number' )
            errorAdd(' Sample not a number \n');
        if(errorCheck())
            return false;
        if( value < sample )
            return true;
        return false;
    };
    /*
     * @param {string} value
     * @param {integer} sample
     * @private
     * @return {boolean}
     */
    const length = function(value,sample){
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
        if(value.length === sample )
            return true;
        return false;
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const valueEqual = function(value,sample){
        if( value == tests[sample].value )
            return true;
        return false;
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    let valueEqualType = function(value,sample){
        if( value === tests[sample].value )
            return true;
        return false;
    };
    /*
     * @param {object} value
     * @param {object} sample
     * @private
     * @return {boolean}
     */
    const valueEqualJson = function(value,sample){
        if( JSON.stringify(value) === JSON.stringify(tests[sample].value) )
            return true;
        return false;
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const valueNotEqual = function(value,sample){
        if( value !=  tests[sample].value )
            return true;
        return false;
    };
    /*
     * @param {any} value
     * @param {any} sample
     * @private
     * @return {boolean}
     */
    const valueNotEqualType = function(value,sample){
        if( value !== tests[sample].value)
            return true;
        return false;
    };
    /*
     * @private
     */
    const collection = {
        '=='                 : equal,
        'eq'                 : equal,
        'e'                  : equal,
        'equal'              : equal,
        'equale'             : equal,
        '!=='                : notEqual,
        'neq'                : notEqual,
        'ne'                 : notEqual,
        'notequal'           : notEqual,
        'notequale'          : notEqual,
        '==='                : equalType,
        'eqt'                : equalType,
        'et'                 : equalType,
        'qt'                 : equalType,
        'equaltype'          : equalType,
        'equaletype'         : equalType,
        '!==='               : notEqualType,
        'neqt'               : notEqualType,
        'net'                : notEqualType,
        'nqt'                : notEqualType,
        'notequaltype'       : notEqualType,
        'notequaletype'      : notEqualType,
        'j=='                : equalJson,
        'jeq'                : equalJson,
        'je'                 : equalJson,
        'jsonequal'          : equalJson,
        'jsonequale'         : equalJson,
        '==j'                : equalJson,
        'eqj'                : equalJson,
        'ej'                 : equalJson,
        'equaljson'          : equalJson,
        'equalejson'         : equalJson,
        '>'                  : greater,
        'greater'            : greater,
        'more'               : greater,
        'higher'             : greater,
        'bigger'             : greater,
        'biger'              : greater,
        'larger'             : greater,
        '<'                  : less,
        'less'               : less,
        'lower'              : less,
        'smaller'            : less,
        'smaler'             : less,
        'length'             : length,
        'v=='                : valueEqual,
        'veq'                : valueEqual,
        've'                 : valueEqual,
        'valueequal'         : valueEqual,
        'valueequale'        : valueEqual,
        'v!=='               : valueNotEqual,
        'vneq'               : valueNotEqual,
        'vne'                : valueNotEqual,
        'valuenotequal'      : valueNotEqual,
        'valuenotequale'     : valueNotEqual,
        'v==='               : valueEqualType,
        'veqt'               : valueEqualType,
        'vet'                : valueEqualType,
        'vqt'                : valueEqualType,
        'valueequaltype'     : valueEqualType,
        'valueequaletype   ' : valueEqualType,
        'v!==='              : valueNotEqualType,
        'vneqt'              : valueNotEqualType,
        'vnet'               : valueNotEqualType,
        'vnqt'               : valueNotEqualType,
        'valuenotequaltype'  : valueNotEqualType,
        'valuenotequaletype' : valueNotEqualType,
        'vj=='               : valueEqualJson,
        'vjeq'               : valueEqualJson,
        'vje'                : valueEqualJson,
        'valuejsonequal'     : valueEqualJson,
        'valuejsonequale'    : valueEqualJson,
        'v==j'               : valueEqualJson,
        'veqj'               : valueEqualJson,
        'vej'                : valueEqualJson,
        'valueequaljson'     : valueEqualJson,
        'valueequalejson'    : valueEqualJson
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


