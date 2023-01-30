class User {
    constructor(id, username, password, fullname, profile_img) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.profile_img = profile_img;
    }
}

module.exports = User;