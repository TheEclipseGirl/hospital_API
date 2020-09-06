const passport=require('passport');
const Doctor = require('../models/doctors');

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Doctor.findOne({id:jwt_payload.sub}, function(err, doctor) {
        if (err) {
            return done(err, false);
        }
        if (doctor) {
            return done(null, doctor);
        } else {
            return done(null, false);
            
        }
    });
}));