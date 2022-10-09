const options = {
    swaggerDefinition: {
        info: {
            version: "1.0.1",
            title: "Proyecto API",
            description: "Proyecto desarrollado para la fase 2"
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "HTTP",
                    schema: "Bearer",
                    bearerFormat: "JWT"
                }

            }
        }
    },
    
    apis: [ "./routes/company.js","./routes/department.js", "./routes/employee.js","./routes/user.js"],
}

module.exports = options;