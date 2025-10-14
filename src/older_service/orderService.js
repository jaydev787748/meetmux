const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

const orders = new Map();

const USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'http://localhost:3001/users';

exports.createOrder = async ({ userId, product, quantity }) => {
  if (!userId || !product || !quantity) {
    throw new Error('userId, product and quantity are required');
  }

  try {
    const userResp = await axios.get(`${USER_SERVICE_URL}/${userId}`);
    if (!userResp.data) throw new Error('User not found');
  } catch (err) {
    throw new Error('User not found');
  }

  const id = uuidv4();
  const order = {
    id,
    userId,
    product,
    quantity,
    status: 'created',
    createdAt: new Date().toISOString()
  };
  orders.set(id, order);
  return order;
};

exports.getOrderById = async (id) => {
  return orders.get(id);
};
