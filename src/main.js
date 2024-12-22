import { connect } from "amqplib";

const receiveMessages = async () => {
  const connection = await connect("url");
  const channel = await connection.createChannel();
  const queue = "myqueue-items";

  await channel.assertQueue(queue, { durable: false });
  channel.consume(queue, (msg) => {
    console.log(`Received : ${msg.connect.toString()}`);
  });
};

receiveMessages();
