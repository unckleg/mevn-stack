require('module-alias/register');

const http        = require('http');
const AdminListen = '0.0.0.0';
const AdminPort   = process.env.PORT || 3001;
const AdminAPI    = require('@AdminAPI');
const AdminServer = http.Server(AdminAPI);

AdminServer.listen(
    AdminPort, AdminListen, () => console.log(`AdminAPI service running on ${AdminPort}.`)
);