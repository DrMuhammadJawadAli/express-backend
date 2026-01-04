import mongoose from "mongoose";

const todoSchema= new mongoose.Schema({

    content: {
        type: String, 
        required: true,

    }, 
    complete:{
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] // Array of Sub-Todos
}, {timestamps: ture})

export const Todo = mongoose.model("Todo", todoSchema)








// when the todo is going in the database it will be converted automatic in the "todos"
//  it will plureal and in the lowercase