var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb://devhrid:devhrid@cluster0-shard-00-00-q8j6m.mongodb.net:27017,cluster0-shard-00-01-q8j6m.mongodb.net:27017,cluster0-shard-00-02-q8j6m.mongodb.net:27017/mytasklist_brad?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",["tasks"]);


router.get("/tasks",function(req,res,next){
    db.tasks.find(function(err,tasks){
      
        if(err){
            res.send(err);
        }

        res.json(tasks);

    })
 //res.send("Task Page");
})


router.get("/tasks/:id",function(req,res,next){
    db.tasks.findOne({_id:mongojs.ObjectID(req.params.id)},function(err,task){
      
        if(err){
            res.send(err);
        }

        res.json(task);

    })
})

    router.post("/tasks",function(req,res,next){
        var task = req.body;
        if(task.title == "")
        {
            res.status(400);
            res.json({
                "error": "Bad Data"
            })
        }  
        else{
        db.tasks.save(function(err,task){
          
            if(err){
                res.send(err);
            }
    
            res.json(task);
    
        })
    }
 //res.send("Task Page");
})


router.delete("/tasks/:id",function(req,res,next){
    db.tasks.remove({_id:mongojs.ObjectID(req.params.id)},function(err,task){
      
        if(err){
            res.send(err);
        }

        res.json(task);

    })
})


router.put("/tasks/:id",function(req,res,next){

    var task = req.body;
    var updtask={};

    if(task.isDone){
       updtask.isDone = task.isDone;    
    }
    if(task.title){
        updtask.title = task.title;    
     }
     
    if(!updtask)
    {
      res.status(400);
      res.json({
          "error":"Error"
      })
    }else{
        db.tasks.update({_id:mongojs.ObjectID(req.params.id)},updtask,{},function(err,task){
      
            if(err){
                res.send(err);
            }
    
            res.json(task);
    
        })
    }


})


module.exports = router;
