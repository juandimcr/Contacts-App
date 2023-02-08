class Contacts {
    constructor(id, phone, fullname, contactImg, type, city, country, user) {
        this.id = id;
        this.phone = phone
        this.fullname = fullname;
        this.contactImg = contactImg;
        this.type = type;
        this.city = city;
        this.country = country;
        this.user = user;
    }
}

module.exports = Contacts;