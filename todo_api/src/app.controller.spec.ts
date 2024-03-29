import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

// Add date_added property to Todo type
type Todo = {
  id: string;
  title: string;
  completed: boolean;
  date_added: Date; 
};

describe('TodoController', () => {
  let todoController: TodoController;
  let todoService: TodoService;

  beforeEach(async () => {
    const mockTodoService = {
      findAll: jest.fn(),
      findById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        { provide: TodoService, useValue: mockTodoService },
      ],
    }).compile();

    todoController = module.get<TodoController>(TodoController);
    todoService = module.get<TodoService>(TodoService);
  });

  it('should return a todo by ID', async () => {
    const todoId = '6605f90814a882242aa0bc57';
    const todo: Todo = { 
      id: todoId, 
      title: 'new task one', 
      completed: false,
      date_added: new Date() 
    };
    jest.spyOn(todoService, 'findById').mockResolvedValue(todo);
  
    const result = await todoController.findById(todoId);
  
    expect(result).toEqual(todo);
  });

  // Add more test cases as needed
});
