const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todo');
// mongoose.connect('mongodb+srv://yashlondhe9151:Will2win@2022@cluster0.c8ybjk4.mongodb.net/')
const todoSchema = new mongoose.Schema({
    todoTitle: {
        type: String,
        required: true,

    },
    todoDescription: {
            type: String,
            required: true,
    },

    completed: {
        type: Boolean,
        default: false,
    }
    });

    const Todo = mongoose.model('Todo', todoSchema);

    module.exports = {
        Todo,
    };
