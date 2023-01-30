class Contacts {
    constructor(id, fullname, contact_img, type, city, country, user) {
        this.id = id;
        this.fullname = fullname;
        this.contact_img = contact_img;
        this.type = type;
        this.city = city;
        this.country = country;
        this.user = user;
    }
}

module.exports = Contacts;