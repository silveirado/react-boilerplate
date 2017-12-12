export default {
  httpAdminRoot: process.env.NODERED_ADMIN_PATH || '/red',
  httpNodeRoot: process.env.NODERED_API_PATH || '/api',
  userDir: './.nodered/',
  nodesDir: './.nodered/nodes',
  flowFile: 'flows.json',
  flowFilePretty: true,
  functionGlobalContext: {} // enables global context
};
