
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// for the data model schema
import { Todo, TodoDocument } from './todo.schema';
//CreateTodoDto
import { CreateTodoDto} from './create-todo.dto';
// UpdateTodoDto
import { UpdateTodoDto} from './update-todo.dto';

@Injectable()


// here created all funtions for actions such as create,edit,update, find 


export class TodoService {
  constructor(@InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>) {}

  //to find all event inthe databse
  async findAll(): Promise<Todo[]> {
    try {
      const todos = await this.todoModel.find().exec();
      return todos;
    } catch (error) {
      throw new Error(`Failed to fetch todos: ${error.message}`);
    }
  }

  //to find event using id if need
  async findById(id: string): Promise<Todo | null> {
    try {
      const todo = await this.todoModel.findById(id).exec();
      return todo;
    } catch (error) {
      throw new Error(`Failed to find todo with id ${id}: ${error.message}`);
    }
  }

  //to create new event using the opration
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    try {
      const createdTodo = new this.todoModel(createTodoDto);
      return createdTodo.save();
    } catch (error) {
      throw new Error(`Failed to create todo: ${error.message}`);
    }
  }


  //for the uodate using id event all

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo | null> {
    try {
      const updatedTodo = await this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true }).exec();
      return updatedTodo;
    } catch (error) {
      throw new Error(`Failed to update todo with id ${id}: ${error.message}`);
    }
  }


  // to delete the events 
  async delete(id: string): Promise<Todo | null> {
    try {
      const deletedTodo = await this.todoModel.findByIdAndDelete(id).exec();
      return deletedTodo;
    } catch (error) {
      throw new Error(`Failed to delete todo with id ${id}: ${error.message}`);
    }
  }
}