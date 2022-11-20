require('../Database/connectionDB');
module.exports = ((sequelize, type) => {
    const Beneficiary = sequelize.define('beneficiary', {
        id: {
            type: type.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING(50),
            require: true
        },
        username: {
            type: type.STRING(30),
            require: true
        },

        photo: {
            type: type.STRING(30),
            // type: type.BLOB
        },
        email: {
            type: type.STRING(40),
            require: true
        },
        mobile: {
            type: type.STRING(10),
            require: true
        },
        address: {
            type: type.STRING(10),
            require: true
        },
        gender: {
            type: type.ENUM('male,female,other'),
            defaultValue: '1',
            values: ["0", "1", "2"],
            comment: `0: male 1: female 2 : other`,
        },
        education: {
            type: type.ENUM(["8th,9th,10th,11th,12th,Graduation,Postgradution"]),
            defaultValue: '1',
            values: ["0", "1", "2", "3", "4", "5"],
            comment: `0: 8th 1: 9th 2 : 10th 3:11th 4:12th 5:Graduation  6:Postgradution `,
        },
        state: {
            type: type.INTEGER(11),
            require: true,
            references: {
                model: 'states',
                key: 'id',
            }

        },
        district: {
            type: type.INTEGER(11),
            require: true,
            references: {
                model: 'districts',
                key: 'id',
            }

        },
        block: {
            type: type.INTEGER(11),
            require: true,
            references: {
                model: 'blocks',
                key: 'id',
            }

        },
        village: {
            type: type.INTEGER(11),
            require: true,
            references: {
                model: 'villages',
                key: 'id',
            }

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
            type: type.INTEGER(11),
            require: true,
            references: {
                model: 'users',
                key: 'id',
            }
        },
        updated_by: {
            type: type.INTEGER(11)
        }


    }, { freezTableName: true, timestamps: false });
    return Beneficiary;
})(sequelize, Sequelize);