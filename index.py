myName = input("What's your name? ")
myLunch = input("What are you having for lunch? ")
print(myName, "is going to be chowing down on", myLunch, "very soon!")

# WEEK-3 of 2 major project ideas if your specifics are web development.🔍
# work on this project
# 1. Real-time Collaborative Whiteboard
# Tech Stack:
# Frontend: HTML, CSS, JavaScript, React
# Backend: Express.js with WebSocket support (for real-time communication)
# Database: You may use a NoSQL database like MongoDB to store collaborative session data.
# Hosting: Deploy the frontend on platforms like Netlify or Vercel and the backend on a cloud server (e.g., AWS, Heroku).

# Workflow:
# Frontend Development: Create the user interface for the whiteboard using React. Include features like drawing tools, color selection, and real-time cursor tracking.

# Backend Development: Set up an Express.js server to handle user authentication and WebSocket communication for real-time updates. You'll need to manage collaborative sessions and data sharing.

# WebSocket Integration: Implement WebSocket to allow multiple users to collaborate in real-time on the whiteboard. Update the canvas in response to user actions, such as drawing strokes.

# User Authentication: Add user authentication to track the authorship of the drawings. You can use libraries like Passport.js for authentication.

# Database Integration: Store collaborative session data in a NoSQL database like MongoDB. This could include saving drawings, user information, and session metadata.

# Deployment: Deploy the frontend and backend separately on their respective platforms. Ensure proper CORS configuration for communication between them.

# Testing and Optimization: Test the application thoroughly to ensure smooth real-time collaboration and resolve any performance issues.

# User Interface Enhancements: Add features like exporting and importing drawings, saving sessions, and sharing sessions with others.