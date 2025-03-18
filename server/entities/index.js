import User from "./users.js";
import Post from "./post.js";

// Define relationships (if needed)
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

export { User, Post };
