const { response } = require('express');
const ToDoListModel = require('../models/ToDoListModel')
var jwt = require('jsonwebtoken');


exports.CreateToDo = (req,res)=>{
    let reqBody = req.body;

    let TodoSubject = reqBody['TodoSubject']
    let TodoDescription = reqBody['TodoDescription']
    let UserName =req.headers['username']
    let TodoStatus="New"
    let TodoCreateDate = Date.now();
    let TodoUpdateDate = Date.now();
    let PostBody = {
            UserName:UserName,
            TodoSubject:TodoSubject,
            TodoDescription:TodoDescription,
            TodoStatus:TodoStatus,
            TodoCreateDate:TodoCreateDate,
            TodoUpdateDate:TodoUpdateDate
    }
    ToDoListModel.create(PostBody,(err,data)=>{
        if(err){
            res.status(400).json({status:'fail',data:err})

        }
        else{
            res.status(200).json({status:'success',data:data})

        }
    })
}



exports.SelectToDo = (req,res)=>{
    let UserName =req.headers['username']

    ToDoListModel.find({UserName:UserName}, (err,data)=>{
        if(err){
            res.status(400).json({status:'fail',data:err})

        }
        else{
            res.status(200).json({status:'success',data:data})

        }



})
}


exports.UpdateToDo = (req,res)=>{
    let reqBody = req.body;

    let TodoSubject = reqBody['TodoSubject']
    let TodoDescription = reqBody['TodoDescription']
    let _id =reqBody['_id']

    let TodoUpdateDate = Date.now();
    let PostBody = {
           
            TodoSubject:TodoSubject,
            TodoDescription:TodoDescription,
       
     
            TodoUpdateDate:TodoUpdateDate
    }

    ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:'fail',data:err})

        }
        else{
            res.status(200).json({status:'success',data:data})

        }
    })

}



exports.UpdateStatusToDo = (req,res)=>{
    let reqBody = req.body;


    let _id =reqBody['_id']
    let TodoStatus=reqBody['TodoStatus']

    let TodoUpdateDate = Date.now();
    let PostBody = {
           
       
        TodoStatus:TodoStatus,
     
        TodoUpdateDate:TodoUpdateDate
    }

    ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:'fail',data:err})

        }
        else{
            res.status(200).json({status:'success',data:data})

        }
    })

}




exports.RemoveToDo = (req,res)=>{
    let reqBody = req.body;


    let _id =reqBody['_id']
 

    ToDoListModel.remove({_id:_id},(err,data)=>{
        if(err){
            res.status(400).json({status:'fail',data:err})

        }
        else{
            res.status(200).json({status:'success',data:data})
 
        }
    })

}


exports.SelectToDoByStatus = (req,res)=>{
    let reqBody = req.body;

    let UserName =req.headers['username']
    let TodoStatus=reqBody['TodoStatus']


    ToDoListModel.find({UserName:UserName},{TodoStatus:TodoStatus},(err,data)=>{
        if(err){
            res.status(400).json({status:'fail',data:err})

        }
        else{
            res.status(200).json({status:'success',data:data})

        }
    })

}