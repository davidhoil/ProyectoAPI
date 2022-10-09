const options = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Proyecto API"
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