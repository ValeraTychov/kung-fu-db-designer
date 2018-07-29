export class SqlType{
    name: string;
    arguments: number[];

    constructor (typeName?: string){
        if (typeName){
            let typeDef = sqlTypeDefinitionList.find( (val) => {return val.name === typeName;} )
            if (typeDef){
                this.name = typeDef.name;
                this.arguments = new Array<number>(typeDef.arguments.length);
            }
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
                name: "n",
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
                name: "n",
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
                name: "n",
                constraints: {
                    min: 1,
                    max: 8000
                }
            }
        ]
    }
]
