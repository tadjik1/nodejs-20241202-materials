import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: 'description is required' })
  description: string;

  @Prop({ index: true })
  isCompleted: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
