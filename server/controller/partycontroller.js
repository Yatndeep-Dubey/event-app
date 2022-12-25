// ye create kar rha hai party ka details


var Partydb= require('../model/parties');
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new party
    const party = new Partydb({
        name:  req.body.name,
        venue: req.body.venue,
        date:  req.body.date,
        time:  req.body.time
    })

    // save party in the database
    party
        .save(party)
        .then(data => {
            res.send(data)
            res.redirect('/organizeparty');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}
