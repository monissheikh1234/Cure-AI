# CureAI - Healthcare Management System

A comprehensive healthcare management system built with Node.js, Express, MongoDB, and EJS.

## Features

- **Patient Management**: Register and manage patient information
- **Doctor Dashboard**: Doctor-specific interface for patient management
- **AI Health Recommendations**: Integration with Google Gemini AI for personalized health suggestions
- **Medical Records**: Track current and past medications, lab results, and diagnoses
- **Emergency Contacts**: Store and manage emergency contact information

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Template Engine**: EJS
- **AI Integration**: Google Gemini API
- **Styling**: CSS3

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Google Gemini API key

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CureAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/
   GEMINI_API_KEY=your-gemini-api-key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   Open your browser and go to `http://localhost:3000`

## Deployment

### Deploy to Render (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Sign up/Login with your GitHub account
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - **Name**: `cureai-healthcare`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Port**: `3000`

3. **Set Environment Variables in Render**
   - Go to your service dashboard
   - Navigate to "Environment" tab
   - Add these variables:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `GEMINI_API_KEY`: Your Google Gemini API key

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically deploy your application

### Alternative Deployment Options

#### Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Add environment variables
4. Deploy automatically

#### Deploy to Heroku
1. Install Heroku CLI
2. Create a `Procfile`:
   ```
   web: npm start
   ```
3. Deploy using Heroku CLI

## Project Structure

```
CureAI/
├── models/
│   ├── patient.js
│   └── doctor.js
├── public/
│   ├── css/
│   ├── js/
│   └── *.html
├── views/
│   ├── *.ejs
├── routes/
│   └── patients.js
├── index.js
├── package.json
└── README.md
```

## API Endpoints

- `GET /` - Home page
- `GET /signup/new` - Signup page
- `POST /signup` - User registration
- `GET /login` - Login page
- `POST /login` - User authentication
- `GET /search-patients` - Search patients by Aadhar ID
- `POST /addmedication` - Add medication for patients
- `GET /get-ai-suggestion` - Get AI health recommendations

## Database Schema

### Patient Schema
```javascript
{
  Patient: {
    Name: String,
    Age: String,
    Gender: String,
    aadhar_id: String,
    password: String,
    email: String
  },
  Emergency_Contact: {
    name: String,
    Relationship: String,
    Phone: String
  },
  Medical_Information: {
    Blood_Group: String,
    Allergies: String
  },
  Current_Medication: Array,
  Past_Medication: Array,
  Lab_Results: Array,
  Diagnosis: Array
}
```

### Doctor Schema
```javascript
{
  d_id: String,
  d_full_name: String,
  hospital_name: String,
  d_email: String,
  d_password: String
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support and questions, please open an issue on GitHub.
