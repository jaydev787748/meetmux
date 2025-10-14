const { v4: uuidv4 } = require('uuid');

const users = new Map(); // In-memory store for demo

exports.createUser = async (data) => {
  if (!data.name || !data.email) throw new Error('Name and email required');
  const id = uuidv4();
  const user = { id, name: data.name, email: data.email, createdAt: new Date().toISOString() };
  users.set(id, user);
  return user;
};

exports.getUserById = async (id) => {
  return users.get(id);
};
