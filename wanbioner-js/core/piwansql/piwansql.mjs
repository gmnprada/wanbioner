import { Sequelize, DataTypes } from 'sequelize';

// nothng need to be recorded yet avoid spam of logs
function log(){

}

export const sequelize = new Sequelize(process.env.PIWAN_DB_NAME, process.env.PIWAN_DB_USER, process.env.PIWAN_DB_PASS, {
    host: process.env.PIWAN_DB_HOST,
    dialect: 'sqlite',
    logging:log
});

export const DB_NS_RESOLVE = sequelize.define('ns_resolver',{
    id:{
        type: DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true
    },
    ip4:{
        type: DataTypes.STRING(18),
        allowNull:false
    },
    ip6:{
        type: DataTypes.STRING(39),
        allowNull:false
    },
    hostname :{
        type: DataTypes.STRING(254),
        allowNull:true
    },
    domainname :{
        type: DataTypes.STRING(254),
        allowNull:true
    }
},
{
        // Other model options go here
        timestamps: true,
        freezeTableName: true,
        tableName: "ns_resolver"
});

export const DB_TRX_LEDGER = sequelize.define('trx_ledger',{
    id:{
        type: DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true
    },
    wallet_address_from:{
        type: DataTypes.STRING(64),
        allowNull:false
    },
    wallet_address_to:{
        type: DataTypes.STRING(64),
        allowNull:false
    },
    ammount :{
        type: DataTypes.BIGINT,
        allowNull:false,
    },
    verified :{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    two_way_proof :{
        type:DataTypes.STRING,
        allowNull:true
    },
    hostname :{
        type: DataTypes.STRING(254),
        allowNull:true
    }
},
{
        // Other model options go here
        timestamps: true,
        freezeTableName: true,
        tableName: "trx_ledger"
});


export const DB_TRX_U2A = sequelize.define('trx_u2a',{
    id:{
        type: DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true
    },
    wallet_address:{
        type: DataTypes.STRING(64),
        allowNull:false
    },
    ammount :{
        type: DataTypes.BIGINT,
        allowNull:false,
    },
    verified :{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    two_way_proof :{
        type:DataTypes.STRING,
        allowNull:true
    },
    hostname :{
        type: DataTypes.STRING(254),
        allowNull:true
    }
},
{
        // Other model options go here
        timestamps: true,
        freezeTableName: true,
        tableName: "trx_u2a"
});



export const DB_TRX_A2U = sequelize.define('trx_a2u',{
    id:{
        type: DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true
    },
    wallet_address:{
        type: DataTypes.STRING(64),
        allowNull:false
    },
    ammount :{
        type: DataTypes.BIGINT,
        allowNull:false,
    },
    verified :{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    two_way_proof :{
        type:DataTypes.STRING,
        allowNull:true
    },
    hostname :{
        type: DataTypes.STRING(254),
        allowNull:true
    }
},
{
        // Other model options go here
        timestamps: true,
        freezeTableName: true,
        tableName: "trx_u2a"
});

export default {
    sequelize,
    DB_NS_RESOLVE,
    DB_TRX_A2U,
    DB_TRX_LEDGER,
    DB_TRX_U2A
}