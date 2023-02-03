class User {
    constructor(id, username, password, fullname, profileImg, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.profileImg = profileImg;
        this.email = email;
    }
}

module.exports = User;