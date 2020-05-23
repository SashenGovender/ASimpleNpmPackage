//note that the package npm name  is taken from the package.json file "name" value

//  module.exports object allows us to expose it as a module.  we could import this module into another application.
module.exports = {

    Welcome: function (strName) {
        console.log(`Recieved string ${strName}`);
        return `Hello ${strName}. Hope you having a nice day`;
    }
}
