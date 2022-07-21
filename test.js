
const nanoTest  = new (require('nanoTest')).test({
    'progress_bar' : false,
    'debug_print' : 'short'
});
const assertManager = new (require('./index.js')).base();


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
    'error',
);
nanoTest.add(
    'just value ',
    {
        'function':assertManager.check,
        'options':[1],
    },
    'error',
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
    'greater fail value not an integer',
    {
        'function':assertManager.check,
        'options':['a', '>', 0],
    },
    'error'
);
nanoTest.add(
    'greater fail sample not an integer',
    {
        'function':assertManager.check,
        'options':[1, '>', 'a'],
    },
    'error'
);
nanoTest.add(
    'greater fail equal',
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
    'smaller fail value not an integer',
    {
        'function':assertManager.check,
        'options':['a', '<', 2],
    },
    'error'
);
nanoTest.add(
    'smaller fail sample not an integer',
    {
        'function':assertManager.check,
        'options':[1, '<', 'a'],
    },
    'error'
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
        'options':[1, '!==', 1],
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
        'options':[1, '!=', '1'],
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
    'not equal type fail',
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
    'length fail higher',
    {
        'function':assertManager.check,
        'options':['a', 'length', 2],
    },
    '===',
    false
);
nanoTest.add(
    'length fail sample not an integer',
    {
        'function':assertManager.check,
        'options':['a', 'length', 'a'],
    },
    'error'
);
nanoTest.add(
    'length fail sample not an integer',
    {
        'function':assertManager.check,
        'options':['a', 'length', {}],
    },
    'error'
);
nanoTest.add(
    'length faili value is an integer',
    {
        'function':assertManager.check,
        'options':[1, 'length', 'a'],
    },
    'error'
);
nanoTest.add(
    'value equal ok',
    {
        'function':assertManager.check,
        'options':[1, 'v==', 'a1a'],
    },
    '===',
    true
);
nanoTest.add(
    'value equal fail',
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

nanoTest.add(
    'value instanceof ok ',
    {
        'function':assertManager.check,
        'options':[Error('testerror'), 'instanceof', Error],
    },
    '===',
    true 
);

nanoTest.add(
    'value instanceof with instance ok',
    {
        'function':assertManager.check,
        'options':[new ArrayBuffer(8), 'instanceof', ArrayBuffer],
    },
    '===',
    true
);


nanoTest.add(
    'value instanceof with is ok',
    {
        'function':assertManager.check,
        'options':[new Uint8Array([9,5]), 'is', Uint8Array],
    },
    '===',
    true 
);
nanoTest.add(
    'value instanceof faild ',
    {
        'function':assertManager.check,
        'options':[new Error('testerror'), 'instanceof', Uint8Array],
    },
    '===',
    false 
);

nanoTest.add(
    'value instanceof with instance faild',
    {
        'function':assertManager.check,
        'options':[new ArrayBuffer(8), 'instanceof', Uint8Array],
    },
    '===',
    false 
);


nanoTest.add(
    'value instanceof with is faild',
    {
        'function':assertManager.check,
        'options':[new Uint8Array([9,5]), 'is', Error],
    },
    '===',
    false 
);
nanoTest.add(
    'result equal ok',
    {
        'function':assertManager.check,
        'options':[1, 'r==', ()=>'1'],
    },
    '===',
    true
);
nanoTest.add(
    'result equal fail',
    {
        'function':assertManager.check,
        'options':[2, 'r==', ()=>1],
    },
    '===',
    false
);
nanoTest.add(
    'result not equal fail',
    {
        'function':assertManager.check,
        'options':[1, 'r!==', ()=>1],
    },
    '===',
    false
);
nanoTest.add(
    'result not equal ok',
    {
        'function':assertManager.check,
        'options':[2, 'r!==', ()=>1],
    },
    '===',
    true
);
nanoTest.add(
    'result equal ok',
    {
        'function':assertManager.check,
        'options':[1, 'r===', ()=>1],
    },
    '===',
    true
);
nanoTest.add(
    'result json equal type fail ',
    {
        'function':assertManager.check,
        'options':[2, 'rj==', ()=>1],
    },
    '===',
    false
);
nanoTest.add(
    'value not equal type ok ',
    {
        'function':assertManager.check,
        'options':[2, 'r!===', ()=>'2'],
    },
    '===',
    true
);
nanoTest.add(
    'result json ok ',
    {
        'function':assertManager.check,
        'options':[
            {'test':1}, 
            'rj==',
            ()=>{return {'test':1};}
        ],
    },
    '===',
    true
);
nanoTest.add(
    'result json failed ',
    {
        'function':assertManager.check,
        'options':[
            {'t':1},
            'rj==',
            ()=>{return {'test':1};}
        ],
    },
    '===',
    false 
);
nanoTest.add(
    'error ',
    {
        'function':assertManager.check,
        'options':[
            {'test':1}, 
            'error',
            'anything'
        ],
    },
    '===',
    true
);
nanoTest.add(
    'error ',
    {
        'function':assertManager.check,
        'options':[
            {'test':1}, 
            '!error',
            'anything'
        ],
    },
    '===',
    true
);



nanoTest.run();
