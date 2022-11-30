const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const health_trackerRoutes = express.Router();
const PORT = 4000;

let health_tracker = require('./health_tracker.model')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/health_tracker', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

health_trackerRoutes.route('/').get(function(req, res) {
    health_tracker.find(function(err, info) {
        if (err) {
            console.log(err);
        } else {
            res.json(info);
        }
    });
});

// health_trackerRoutes.route('/:name').get(function(req, res) {
//     let name = req.params;
//     health_tracker.find(name, function(err, info) {
//         res.json(info);
//     });
// });

// count total records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/totpatients').get(function(req, res) {
    health_tracker.countDocuments({}, function(err, info) {
        res.json(info);
    });
});

// count branch records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/count/:branch').get(function(req, res) {
    let branch = req.params;
    health_tracker.countDocuments(branch, function(err, info) {
        res.json(info);
    });
});

// count department records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/dcount/:department').get(function(req, res) {
    let department = req.params;
    health_tracker.countDocuments(department, function(err, info) {
        res.json(info);
    });
});

// branch vs department records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/filter/:branch/:department').get(function(req, res) {
    let branch = req.params.branch;
    let department = req.params.department;
    health_tracker.countDocuments({"branch": branch, "department": department}, function(err, info) {
        res.json(info);
    });
});

// count gender records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/gcount/:gender').get(function(req, res) {
    let gender = req.params;
    health_tracker.countDocuments(gender, function(err, info) {
        res.json(info);
    });
});

// count age 0_18 records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/acount/0_18').get(function(req, res) {    
    health_tracker.countDocuments({$and : [{"age":{$gte: 0}}, {"age":{$lte: 18}}]}, function(err, info) {
        res.json(info);
    });
});

// count age 19_40 records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/acount/19_40').get(function(req, res) {    
    health_tracker.countDocuments({$and : [{"age":{$gte: 19}}, {"age":{$lte: 40}}]}, function(err, info) {
        res.json(info);
    });
});

// count age 41_60 records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/acount/41_60').get(function(req, res) {    
    health_tracker.countDocuments({$and : [{"age":{$gte: 41}}, {"age":{$lte: 60}}]}, function(err, info) {
        res.json(info);
    });
});

// count age 61_100 records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/acount/61_100').get(function(req, res) {    
    health_tracker.countDocuments({$and : [{"age":{$gte: 61}}, {"age":{$lte: 100}}]}, function(err, info) {
        res.json(info);
    });
});

// display records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/display/:name').get(function(req, res) {
        let name = req.params;
        health_tracker.find(name, function(err, info) {
            res.json(info);
        });
    });


// insert records---------------------------------------------------------------------------------------------------------
health_trackerRoutes.route('/add').post(function(req, res) {
    let details = new health_tracker(req.body);
    details.save()
        .then(details => {
            res.status(200).json({'details': 'details added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new details failed');
        });
});

health_trackerRoutes.route('/update/:name').post(function(req, res) {
    health_tracker.find(req.params.name, function(err, info) {
        if (!info)
            res.status(404).send("data is not found");
        else
            info.name = req.body.name;
            info.mobile = req.body.mobile;
            info.gender = req.body.gender;
            info.day = req.body.day;
            info.month = req.body.month;
            info.year = req.body.year;
            info.branch = req.body.branch;
            info.department = req.body.department;
            info.bgroup = req.body.bgroup;
            info.age = req.body.age;
            info.weight = req.body.weight;
            info.medication = req.body.medication;
            info.mentalhistory = req.body.mentalhistory;
            info.bpdiastolic = req.body.bpdiastolic;
            info.bpsystolic = req.body.bpsystolic;
            info.diabetes = req.body.diabetes;
            info.oralhealth = req.body.oralhealth;
            info.oralreports = req.body.oralreports;
            info.organ = req.body.organ;
            info.radioreports = req.body.radioreports;
            info.cardiachistory = req.body.cardiachistory;
            info.cardioreports = req.body.cardioreports;
            info.wbc = req.body.wbc;
            info.rbc = req.body.rbc;
            info.haemoglobin = req.body.haemoglobin;
            info.pregnancy = req.body.pregnancy;
            info.gynaecreports = req.body.gynaecreports;
            info.save().then(info => {
                res.json('info updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/p_details', health_trackerRoutes);
 
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

// {
//     "name":"Rachel Green",
//     "mobile":"9876543210",
//     "gender":"Female",
//     "day":4, 
//     "month": "December", 
//     "year": "2022" ,
//     "branch": "US" ,
//     "department": "Pathology",
//     "bgroup":"O" , 
//     "age": 20, 
//     "weight": 62.5 ,
//     "medication":"", 
//     "mentalhistory":"", 
//     "bpdiastolic": 0,
//     "bpsystolic": 0,
//     "diabetes":0,
//     "oralhealth":"", 
//     "oralreports":"", 
//     "organ":"", 
//     "radioreports":"", 
//     "cardiachistory":"",
//     "cardioreports": "",
//     "wbc":7000, 
//     "rbc":10000, 
//     "hemoglobin":13.4, 
//     "pregnancy":"", 
//     "gynaecreports":""
//   }