
const nanoTest  = new (require('nanoTest')).test({
    'debugPrint' : 'short'
});
const assertManager = new (require('./index.js')).assertBase();


     nanoTest.add(
         'add tests ',
         {
         'function':assertManager.tests,
         'options':[{
         'a1a':{'value':1},
         'a2a':{'value':{'test':1}},
        }],
        },
        '===',
        true
    );
     nanoTest.add(
        'empty options ',
        {
            'function':assertManager.check,
            'options':[],
        },
        '===',
        false
    );
     nanoTest.add(
        'just value ',
        {
            'function':assertManager.check,
            'options':[1],
        },
        '===',
        false
    );
     nanoTest.add(
        'missing sample',
        {
            'function':assertManager.check,
            'options':[1, '==='],
        },
        '===',
        false
    );
     nanoTest.add(
        'equal type fail ',
        {
            'function':assertManager.check,
            'options':[1, '===', 'r'],
        },
        '===',
        false
    );
     nanoTest.add(
        'equal type ok',
        {
            'function':assertManager.check,
            'options':[1, '===', 1],
        },
        '===',
        true
    );
     nanoTest.add(
        'equal ok- ',
        {
            'function':assertManager.check,
            'options':[1, '==', '1'],
        },
        '===',
        true
    );
     nanoTest.add(
        'equal fail ',
        {
            'function':assertManager.check,
            'options':[1, '==', 'r'],
        },
        '===',
        false
    );
     nanoTest.add(
        'greater ok ',
        {
            'function':assertManager.check,
            'options':[1, '>', 0],
        },
        '===',
        true
    );
     nanoTest.add(
        'greater fail ',
        {
            'function':assertManager.check,
            'options':['a', '>', 0],
        },
        '===',
        false
    );
     nanoTest.add(
        'greater fail ',
        {
            'function':assertManager.check,
            'options':[1, '>', 'a'],
        },
        '===',
        false
    );
     nanoTest.add(
        'greater fail ',
        {
            'function':assertManager.check,
            'options':[1, '>', 1],
        },
        '===',
        false
    );
     nanoTest.add(
        'smaller ok ',
        {
            'function':assertManager.check,
            'options':[1, '<', 2],
        },
        '===',
        true
    );
     nanoTest.add(
        'smaller fail ',
        {
            'function':assertManager.check,
            'options':['a', '<', 2],
        },
        '===',
        false
    );
     nanoTest.add(
        'smaller fail ',
        {
            'function':assertManager.check,
            'options':[1, '<', 'a'],
        },
        '===',
        false
    );
     nanoTest.add(
        'smaller fail ',
        {
            'function':assertManager.check,
            'options':[1, '<', 1],
        },
        '===',
        false
    );
     nanoTest.add(
        'length ok ',
        {
            'function':assertManager.check,
            'options':['ad', 'length', 2],
        },
        '===',
        true
    );
     nanoTest.add(
        'json equal ok- ',
        {
            'function':assertManager.check,
            'options':[{1:1}, 'j==', {1:1}],
        },
        '===',
        true
    );
     nanoTest.add(
        'json equal fail ',
        {
            'function':assertManager.check,
            'options':[{1:1}, 'j==', {}],
        },
        '===',
        false
    );
     nanoTest.add(
        'not equal type fail',
        {
            'function':assertManager.check,
            'options':[1, '!==', '1'],
        },
        '===',
        false
    );
     nanoTest.add(
        'not qeual type ok',
        {
            'function':assertManager.check,
            'options':[1, '!==', 2],
        },
        '===',
        true
    );
     nanoTest.add(
        'not equal type fail',
        {
            'function':assertManager.check,
            'options':[1, '===', '1'],
        },
        '===',
        false
    );
     nanoTest.add(
        'not equal fail',
        {
            'function':assertManager.check,
            'options':[1, '!=', '1'],
        },
        '===',
        false
    );
     nanoTest.add(
        'not equal fail ',
        {
            'function':assertManager.check,
            'options':[1, '!=', 1],
        },
        '===',
        false
    );
     nanoTest.add(
        'not equal type ok',
        {
            'function':assertManager.check,
            'options':[1, '!==', '2'],
        },
        '===',
        true
    );
     nanoTest.add(
        'not equal fail',
        {
            'function':assertManager.check,
            'options':[1, '!==', 1],
        },
        '===',
        false
    );
     nanoTest.add(
        'not equal type ok',
        {
            'function':assertManager.check,
            'options':[1, '!===', '2'],
        },
        '===',
        true
    );
     nanoTest.add(
        'noti equal type fail',
        {
            'function':assertManager.check,
            'options':[1, '!===', 1],
        },
        '===',
        false
    );
     nanoTest.add(
        'length ok',
        {
            'function':assertManager.check,
            'options':['a', 'length', 1],
        },
        '===',
        true
    );
     nanoTest.add(
        'length fail',
        {
            'function':assertManager.check,
            'options':['a', 'length', 2],
        },
        '===',
        false
    );
     nanoTest.add(
        'length fail',
        {
            'function':assertManager.check,
            'options':['a', 'length', 'a'],
        },
        '===',
        false
    );
     nanoTest.add(
        'length fail',
        {
            'function':assertManager.check,
            'options':['a', 'length', {}],
        },
        '===',
        false
    );
     nanoTest.add(
        'length fail',
        {
            'function':assertManager.check,
            'options':[1, 'length', 'a'],
        },
        '===',
        false
    );
     nanoTest.add(
        'value equali ok',
        {
            'function':assertManager.check,
            'options':[1, 'v==', 'a1a'],
        },
        '===',
        true
    );
     nanoTest.add(
        'valie equal fail',
        {
            'function':assertManager.check,
            'options':[2, 'v==', 'a1a'],
        },
        '===',
        false
    );
     nanoTest.add(
        'value not equal fail',
        {
            'function':assertManager.check,
            'options':[1, 'v!==', 'a1a'],
        },
        '===',
        false
    );
     nanoTest.add(
        'value not equal ok',
        {
            'function':assertManager.check,
            'options':[2, 'v!==', 'a1a'],
        },
        '===',
        true
    );
     nanoTest.add(
        'value equal ok',
        {
            'function':assertManager.check,
            'options':[1, 'v===', 'a1a'],
        },
        '===',
        true
    );
     nanoTest.add(
        'value json equal type fail ',
        {
            'function':assertManager.check,
            'options':[2, 'v===', 'a1a'],
        },
        '===',
        false
    );
     nanoTest.add(
        'value json not equal type fail ',
        {
            'function':assertManager.check,
            'options':[1, 'v!===', 'a1a'],
        },
        '===',
        false
    );
     nanoTest.add(
        'value not equal type ok ',
        {
            'function':assertManager.check,
            'options':[2, 'v!===', 'a1a'],
        },
        '===',
        true
    );
     nanoTest.add(
        'value json ok ',
        {
            'function':assertManager.check,
            'options':[{'test':1}, 'vj==', 'a2a'],
        },
        '===',
        true
    );
     nanoTest.add(
        'value json failed ',
        {
            'function':assertManager.check,
            'options':[{'t':1}, 'vj==', 'a2a'],
        },
        '===',
        false 
    );



nanoTest.run();
