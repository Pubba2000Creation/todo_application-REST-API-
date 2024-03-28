import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('TodoController', () => {
  let todoController: TodoController;
  let todoService: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    todoController = module.get<TodoController>(TodoController);
    todoService = module.get<TodoService>(TodoService);
    
  });

  // Write test case

  it('should return a todo by ID', async () => {
    const todoId = '6605f90814a882242aa0bc57';
    const todo: Todo = { id: todoId, title: 'new task one', completed: false };
    jest.spyOn(todoService, 'findById').mockResolvedValue(todo);
  
    const result = await todoController.findById(todoId);
  
    expect(result).toEqual(todo);
  });
  













});
