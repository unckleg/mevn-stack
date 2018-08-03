module.exports = (
    destination = 'uploads',
    requestFileDestinationKey = 'uploadedFile',
    requestFilenameKey = 'uploadedFileName',
    renameStrategyCallback = null,
) => {
    let normalizeUrl = (req, name) => {
        return req.protocol
            + '://'
            + req.get('host')
            + '/'
            + req[requestFileDestinationKey]
            + '/'
            + name
            ;
    };

    let multer = require('multer'),
        path   = require('path'),
        name   = ''
    ;

    return multer({
        storage: multer.diskStorage({
            destination: (req, file, next) => {
                req[requestFileDestinationKey] = destination;
                next(null, destination);
            },

            filename: (req, file, next) => {
                name = typeof renameStrategyCallback === 'function'
                    ? renameStrategyCallback(req, file, next)
                    : file.fieldname + '-' + Date.now() + path.extname(file.originalname)
                ;

                req[requestFilenameKey] = normalizeUrl(req, name);
                next(null, name);
            }
        })
    });
};