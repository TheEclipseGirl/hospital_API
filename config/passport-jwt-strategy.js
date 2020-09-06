const passport=require('passport');
const Doctor = require('../models/doctors');

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Doctor.findOne({email:require.body.email}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (doctor) {
            return done(null, user);
        } else {
            return done(null, false);
            
        }
    });
}));