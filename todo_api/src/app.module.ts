// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo, TodoSchema } from './todo.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://pubuduCreations:wlZ2zkHxdSeqqOvw@todo.qodanxu.mongodb.net/?retryWrites=true&w=majority&appName=todo'),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
