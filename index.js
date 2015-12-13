var enb = require('enb');

module.exports = function() {
    this
        .title('Make').helpful()
        .act(function(opts, args) {
            enb.make(process.argv.slice(3));
        })
        .end();
};
