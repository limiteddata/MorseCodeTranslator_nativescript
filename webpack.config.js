const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

  webpack.Utils.addCopyRule('audio/**');
	return webpack.resolveConfig();
};


