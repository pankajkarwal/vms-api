const mongoose = require('mongoose');
mongoose.pluralize(function(name) {
    return name;
});
mongoose.connect('mongodb://127.0.0.1:27017/vms',{ useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("Connection Success");
}).catch((e)=>{
console.log("Error",e)
});

// const Visitor = mongoose.model('visitor_master',{ name: String },'visitor_master');

// const visitor = new Visitor({ name: 'Pankaj' });
// visitor.save().then(() => console.log('Saved Succesfully'));
mongoose.set('debug', true)
