require('../Database/connectionDB');
module.exports = ((sequelize, type) => {
    const Role = sequelize.define('role', {
        id: {
            type: type.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        role: {
            type: type.STRING(30),
            require: true,
            values: ["1", "2",],
            comment: `1: admin 2: Field Officer `,
        },


        is_deleted: {
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
    }, { freezeTimeName: true, timestamps: false });
    return Role;
})(sequelize, Sequelize);