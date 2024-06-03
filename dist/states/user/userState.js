"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserState = void 0;
class User {
    constructor() {
        this.users = {};
    }
    getUser(id) {
        return this.users[id];
    }
    addUser(id, date, money) {
        const user = this.getUser(id);
        this.users[id] = {
            transaction: [],
            freeCharge: money
        };
        this.users[id].transaction =
            user && user.transaction ? [...user.transaction, date] : [date];
    }
}
exports.UserState = new User();
