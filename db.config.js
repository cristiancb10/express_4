const DB_ENGINE = "mysql";

let config = {};

if (DB_ENGINE === "postgres") {
    config = {
        HOST: "localhost",
        USER: "postgres",
        PASSWORD: "",
        DB: "express_4",
        DIALECT: "postgres",
        POOL: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    };

} else if (DB_ENGINE === "mysql") {
    config = {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "",
        DB: "express_4",
        DIALECT: "mysql",
        POOL: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    };

} 

else {
    throw new Error("Base de datos no soportada");
}

export default config;