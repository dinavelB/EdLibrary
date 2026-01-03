import path from "path";

export default {
  mode: "development",
  entry: {
    client: "./src/client/Components/main.jsx",
    admin: "./src/Admin/admin-components/main.jsx",
  },
  output: {
    path: path.resolve("./public"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
