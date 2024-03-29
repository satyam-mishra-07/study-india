const validate = (Schema) => {
    return async (req, res, next) => {
        try {
            const parsedBody = await Schema.parseAsync(req.body);
            req.body = parsedBody;
            next();
        } catch (err) {
            console.error(err);
            const status = 400;
            const message = err.errors[0].message;
            const error = { status, message };
            next(error);
        }
    };
};

module.exports = validate;

  
  module.exports = validate;
