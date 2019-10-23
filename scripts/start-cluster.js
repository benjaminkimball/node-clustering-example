const cluster = require("cluster");

const servers = require("../lib/servers");

const [, , serverType, workerCount = 1] = process.argv;
const server = servers[serverType]; // eslint-disable-line security/detect-object-injection

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < parseInt(workerCount, 10); i++) {
    cluster.fork();
  }

  cluster.on("exit", worker => {
    console.log(`Worker ${worker.process.pid} died`);

    cluster.fork();
  });
} else {
  server.listen(5000);

  console.log(`Worker ${process.pid} started`);
}
