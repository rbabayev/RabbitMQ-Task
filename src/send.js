import { connect } from "amqplib";

const sendMessage = async (message) => {
  const connection = await connect(
    "amqps://timdpxga:JO6ET9ZvdFgzypGGLINmNX5yO5DeCwpv@toucan.lmq.cloudamqp.com/timdpxga"
  );
  const channel = await connection.createChannel();
  const queue = "myqueue-items";

  await channel.assertQueue(queue, { durable: false });
  channel.sendToQueue(queue, Buffer.from(message));

  console.log(" [x] Sent :", message);
};

sendMessage("Hello world");
