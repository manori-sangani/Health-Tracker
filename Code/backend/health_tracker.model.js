const mongoose = require('mongoose');
const { Int, Decimal } = require('mssql');
const Schema = mongoose.Schema;
let health_tracker = new Schema({
    name: {
        type: String
    },
    mobile: {
        type: String
    },
    gender: {
        type: String
    },
    day: {
        type: Number
    },
    month: {
        type: String
    },
    year: {
        type: String
    },
    branch: {
        type: String
    },
    department: {
        type: String
    },
    bgroup: {
        type: String
    },
    age: {
        type: Number
    },
    weight: {
        type: Decimal
    },
    medication: {
        type: String
    },
    mentalhistory: {
        type: String
    },
    bpdiastolic: {
        type: Decimal
    },
    bpsystolic: {
        type: Decimal
    },
    diabetes: {
        type: Decimal
    },
    oralhealth: {
        type: String
    },
    oralreports: {
        type: String
    },
    organ: {
        type: String
    },
    radioreports: {
        type: String
    },
    cardiachistory: {
        type: String
    },
    cardioreports: {
        type: String
    },
    wbc: {
        type: Decimal
    },
    rbc: {
        type: Decimal
    },
    haemoglobin: {
        type: Decimal
    },
    pregnancy: {
        type: String
    },
    gynaecreports: {
        type: String
    }
});
module.exports = mongoose.model('health_tracker', health_tracker);