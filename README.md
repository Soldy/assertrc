
# assertrc (assert real challange)

The assertrc is an alternative shorthanded assert collection.


##init

```javascript

const assertManager = new (require('assertrc')).base();

```


## simple test

```javascript

assertManager.check(
    '1', // value
    `===`, // rule
    '1' // sample
);

```


## simple test upload


```javascript

assertManager.tests({
    'id':'value',
    'id2':'value2'
});


```

## supported operators

| tac                 | Description               |
|---------------------|---------------------------|
| ==                  | Equal                     |
| eq                  | Equal                     |
| e                   | Equal                     |
| equal               | Equal                     |
| equale              | Equal                     |
| !==                 | Not equal                 |
| neq                 | Not equal                 |
| ne                  | Not equal                 |
| notequal            | Not equal                 |
| notequale           | Not equal                 |
| ===                 | Equal with type           |
| eqt                 | Equal with type           |
| et                  | Equal with type           |
| qt                  | Equal with type           |
| equaltype           | Equal with type           |
| equaletype          | Equal with type           |
| !===                | Not equal with type       |
| neqt                | Not equal with type       |
| net                 | Not equal with type       |
| nqt                 | Not equal with type       |
| notequaltype        | Not equal with type       |
| notequaletype       | Not equal with type       |
| j==                 | Deep Equal                |
| jeq                 | Deep Equal                |
| je                  | Deep Equal                |
| jsonequal           | Deep Equal                |
| jsonequale          | Deep Equal                |
| ==j                 | Deep Equal                |
| eqj                 | Deep Equal                |
| ej                  | Deep Equal                |
| equaljson           | Deep Equal                |
| equalejson          | Deep Equal                |
| >                   | Greater                   |
| greater             | Greater                   |
| more                | Greater                   |
| higher              | Greater                   |
| bigger              | Greater                   |
| biger               | Greater                   |
| larger              | Greater                   |
| <                   | Less                      |
| less                | Less                      |
| lower               | Less                      |
| smaller             | Less                      |
| smaler              | Less                      |
| length              | Length                    |
| istanceof           | Instance of               |
| istance             | Instance of               |
| is                  | Instance of               |
| v==                 | Value equal               |
| veq                 | Value equal               |
| ve                  | Value equal               |
| valueequal          | Value equal               |
| valueequale         | Value equal               |
| v!==                | Value not equal           |
| vneq                | Value not equal           |
| vne                 | Value not equal           |
| valuenotequal       | Value not equal           |
| valuenotequale      | Value not equal           |
| v===                | Value equal with type     |
| veqt                | Value equal with type     |
| vet                 | Value equal with type     |
| vqt                 | Value equal with type     |
| valueequaltype      | Value equal with type     |
| valueequaletype     | Value not equal with type |
| v!===               | Value not equal with type |
| vneqt               | Value not equal with type |
| vnet                | Value not equal with type |
| vnqt                | Value not equal with type |
| valuenotequaltype   | Value not equal with type |
| valuenotequaletype  | Value not equal with type |
| vj==                | Value deep equal          |
| vjeq                | Value deep equal          |
| vje                 | Value deep equal          |
| valuejsonequal      | Value deep equal          |
| valuejsonequale     | Value deep equal          |
| v==j                | Value deep equal          |
| veqj                | Value deep equal          |
| vej                 | Value deep equal          |
| valueequaljson      | Value deep equal          |
| valueequalejson     | Value deep equal          |
| r==                 | Result Equal              |
| req                 | Result Equal              |
| re                  | Result Equal              |
| resultequal         | Result Equal              |
| resultequale        | Result Equal              |
| r!==                | Result Not Equal          |
| rneq                | Result Not Equal          |
| rne                 | Result Not Equal          |
| resultnotequal      | Result Not Equal          |
| resultnotequale     | Result Not Equal          |
| r===                | Result Equal Type         |
| reqt                | Result Equal Type         |
| ret                 | Result Equal Type         |
| rqt                 | Result Equal Type         |
| resultequaltype     | Result Equal Type         |
| resultequaletype    | Result Equal Type         |
| r!===               | Result Not Equal Type     |
| rneqt               | Result Not Equal Type     |
| rnet                | Result Not Equal Type     |
| rnqt                | Result Not Equal Type     |
| resultnotequaltype  | Result Not Equal Type     |
| resultnotequaletype | Result Not Equal Type     |
| rj==                | Result Equal Json         |
| rjeq                | Result Equal Json         |
| rje                 | Result Equal Json         |
| resultjsonequal     | Result Equal Json         |
| resultjsonequale    | Result Equal Json         |
| r==j                | Result Equal Json         |
| reqj                | Result Equal Json         |
| rej                 | Result Equal Json         |
| resultequaljson     | Result Equal Json         |
| resultequalejson    | Result Equal Json         |

