import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from '../graphql';
const isDev = process.env.NODE_ENV !== 'production';

export default app => {
  // Graphql endpoint
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
  if (isDev) {
    app.use(
      '/graphiql',
      graphiqlExpress({
        endpointURL: '/graphql'
      })
    );
  }
};
