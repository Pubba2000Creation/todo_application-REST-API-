
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
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findById(id: string): Promise<Todo | null> {
    return this.todoModel.findById(id).exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo | null> {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Todo | null> {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
