const { ApolloServer } = require('apollo-server');

const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }
  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL',
  },
];

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews clone`,
    feed: () => links,
  },
  // 実際に下のような動きをするけど実装する必要はない。（こう動くことを理解する）
  // Link: {
  //   id: (parent) => parent.id,
  //   description: (parent) => parent.description,
  //   // url: (parent) => parent.url,
  // },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
