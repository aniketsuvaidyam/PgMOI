require('../Database/connectionDB');
module.exports = ((sequelize, type) => {
    const Village = sequelize.define('village', {
        id: {
            type: type.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING(30),
            allowNull: false,
            unique: {
                args: true,
                msg: " village Already Exist!"
            }
        },
        block_id: {
            type: type.INTEGER(11),
            require: true,
            references: {
                model: 'blocks',
                key: 'id',
            }
        }, is_deleted: {
            type: type.ENUM,
            defaultValue: '1',
            values: ["0", "1", "2"],
            comment: `0: Inactive 1: Active 2 : Delete`,
        },
        created_at: {
            type: type.DATE,
            defaultValue: type.NOW
        },
        updated_at: {
            type: type.DATE,
            defaultValue: type.NOW
        },
        is_deleted_by: {
            type: type.INTEGER(11),
        },
        deleted_at: {
            type: type.DATE,
        },
        created_by: {
            type: type.INTEGER(11)
        },
        updated_by: {
            type: type.INTEGER(11)
        }


    }, { freezTableName: true, timestamps: false });
    return Village;
})(sequelize, Sequelize);
