
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

// for schema
import { Todo } from './todo.schema';
//CreateTodoDto
import { CreateTodoDto} from './create-todo.dto';
// UpdateTodoDto
import { UpdateTodoDto} from './update-todo.dto';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  //to get all elemnts
  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }


  // serche elemnt by id
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Todo | null> {
    return this.todoService.findById(id);
  }


  //to enter the elemnt
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }


  //to update element using id
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo | null> {
    return this.todoService.update(id, updateTodoDto);
  }


  //to delete elemnt 
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Todo | null> {
    return this.todoService.delete(id);
  }
}
