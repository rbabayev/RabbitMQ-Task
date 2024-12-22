import { connect } from "amqplib";

const receiveMessages = async () => {
  const connection = await connect(
    "amqps://timdpxga:JO6ET9ZvdFgzypGGLINmNX5yO5DeCwpv@toucan.lmq.cloudamqp.com/timdpxga"
  );
  const channel = await connection.createChannel();
  const queue = "myqueue-items";

  await channel.assertQueue(queue, { durable: false });
  channel.consume(queue, (msg) => {
    console.log(`Received : ${msg.connect.toString()}`);
  });
};

receiveMessages();
