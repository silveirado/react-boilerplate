import { mergeSchemas } from 'graphql-tools';
import userSchema from './user.schema';

export default mergeSchemas({
  schemas: [userSchema],
  resolvers: () => ({})
});
