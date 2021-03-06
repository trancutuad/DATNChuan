(function () {
    const mongoose = require('mongoose');
    const user = mongoose.model('User');

    exports.createUser = function (user, callback) {

        user.save(user).then((response) => {
            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };


    exports.findUser = function (query, callback) {
        user.findOne({userId: query}, callback);
    };


    exports.updateUserById = function (id, data, callback) {
        user.findByIdAndUpdate({
            userId: id
        }, data, (err, response) => {
            callback(err, response);
        });
    };
    exports.updatePassword =  (id,newPassword,callback)=>{
        user.updateOne(
            {userId: id},
            {$set: {password : newPassword}},
            (err, res) => {
                if (!err) {
                   callback(err,null)
                } else {
                    callback(null,res)

                }
            }
        );
    }

     //tuan anh
     exports.updateProfire =  (id,phone,address,username,callback)=>{
        console.log("up:id " +id);
        console.log("up:phone " +phone);
        console.log("up:address " +address);
        console.log("up:username " +username);
        user.updateOne(
            {userId: id},
            { $set: {
                phone : phone,
                address: address,
                username: username
            }},
            (err, res) => {
                if (!err) {
                   callback(err,null)
                } else {
                    callback(null,res)
                }
            }
        );
    }

    exports.updateUser = function (query, data, options, callback) {
        user.findOneAndUpdate(query, data, options, (err, response) => {
            callback(err, response);
        });
    };

    exports.deleteUser = function (query, callback) {
        user.deleteOne(query, callback);
    }

})();
