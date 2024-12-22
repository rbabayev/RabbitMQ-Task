import { connect } from "amqplib";

const sendMessage = async (message) => {
  const connection = await connect("url");
  const channel = await connection.createChannel();
  const queue = "myqueue-items";

  await channel.assertQueue(queue, { durable: false });
  channel.sendToQueue(queue, Buffer.from(message));

  console.log(" [x] Sent :", message);
};

sendMessage("Hello world");
