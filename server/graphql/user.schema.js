import { makeExecutableSchema } from 'graphql-tools';
import faker from 'faker';

const typeDefs = `
type User {
	id: String!
	username: String!
	name: String
}

type Query{
	user(id: String): User
	users: [User]
}

type Mutation {
	login(username: String!, password: String!): Query
}`;

const userFake = {
  id: faker.random.alphaNumeric(16),
  username: faker.internet.userName(),
  name: faker.name.findName()
};

const resolvers = {
  Query: {
    user: () => userFake,
    users: () => [userFake]
  },
  Mutation: {
    login: () => userFake
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
