import {DataTypes, Sequelize} from "sequelize";

class Database {
    constructor({username, password, host, port, database, table, scheme}) {
        this.sequelize = new Sequelize(database, username, password, {host: host, port: port, logging: false, dialect: 'postgres'});

        this.models = {
            user: this.sequelize.define(table, {
                username: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                password: DataTypes.STRING
            },{
                schema: scheme,
                timestamps: false
            })
        }
    }

    async connect() {
        await this.sequelize.authenticate();
    }
}

export default Database;
