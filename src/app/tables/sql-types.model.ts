export class SqlType{
    public definition: SqlTypeDefinition;
    public arguments: number[] = [];

    constructor (typeDefinition?: SqlTypeDefinition){
        if (typeDefinition) {
            this.definition = typeDefinition;
        }
        else{
            this.definition = sqlTypeDefinitionList[0];
        }
    }
}

interface SqlTypeArguments {
    name: string;
    constraints: SqlTypeArgumentsConstraints;
}

interface SqlTypeArgumentsConstraints {
    min;
    max;
}

export class SqlTypeDefinition
 {
    public readonly name: string;
    public arguments: Array<SqlTypeArguments>;

    constructor(name: string){
        this.name = name;
    }
}

export const sqlTypeDefinitionList: Array<SqlTypeDefinition> = [
    {   name: "binary",
        arguments: [
            {
                name: "size",
                constraints: {
                    min: 1,
                    max: 8000
                }
            }
        ]
    },
    {   name: "boolean",
        arguments: null
    },
    {   name: "date",

        arguments: null
    },
    {   name: "datetime",
        arguments: null
    },
    {   name: "decimal",
        arguments: [
            {
                name: "precision",
                constraints: {
                    min: 1,
                    max: 38
                }
            },
            {
                name: "scale",
                constraints: {
                    min: 1,
                    max: "precision"
                }
            }
        ]
    },
    {   name: "float",
        arguments: [
            {
                name: "size",
                constraints: {
                    min: 1,
                    max: 53
                }
            }
        ]
    },
    {   name: "integer",
        arguments: null
    },
    {   name: "text",
        arguments: null
    },
    {   name: "time",
        arguments: null
    },
    {   name: "timestamp",
        arguments: null
    },
    {   name: "varchar",
        arguments: [
            {
                name: "size",
                constraints: {
                    min: 1,
                    max: 8000
                }
            }
        ]
    }
]
