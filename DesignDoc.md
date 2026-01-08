# Microservice API System Design

## Overview
The system consists of two microservices: User Service and Order Service.

## User Service
- Manages user creation and retrieval.
- Stores users in an in-memory map (replaceable with DB).
- Exposes REST endpoints:
  - `POST /users` to create user.
  - `GET /users/:id` to get user details.

## Order Service
- Manages orders linked to users.
- Before creating an order, it verifies user existence by calling User Service API.
- Exposes:
  - `POST /orders` to create an order.
  - `GET /orders/:id` to fetch order details.

## Inter-service Communication
- Order service uses HTTP call to User service endpoint to validate `userId`.
- If user is not found or call fails, order creation fails with error.

## Failure Handling
- User Service:
  - Returns 400 if required data missing.
  - Returns 404 if user not found.
- Order Service:
  - Returns 400 if user validation fails.
  - Returns 500 for other errors.
- Network or timeout errors during inter-service call cause order creation failure with appropriate error message.

## Future Improvements
- Use a database instead of in-memory store.
- Use a message broker for async communication.
- Implement retry logic on inter-service calls.
- Authentication and authorization for endpoints.



