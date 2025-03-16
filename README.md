# Deployment Details

## Frontend Deployment Link:
[[Deployment LINK](https://humao-bundelkhand-22ht.vercel.app/)]

## Backend Deployment Link:
[[Deployment LINK](https://humao-bundelkhand.vercel.app/)]

## Issue Notice:
Although both the frontend and backend are deployed successfully, they are not connecting due to some issue. However, for better understanding, images of the working project on a local machine are provided below.

## Project Screenshots:

### Hero Page:
![Hero Page](image-5.png)

### All Registered Gayaks:
![All Registered Gayaks](image.png)

### Looged In user Bookings for Lokgeet:
![My Bookings](image-1.png)

### Looged In user's Notifications:
![My Notifications](image-2.png)

### Application for Becoming a Gayak (Logged-in Users Only):
![Application](image-3.png)

### Profile of Logged-in User:
![Profile](image-4.png)

---

## Environment File Structure

### Backend (.env file):
```
MONGO_URI= [Your MongoDB connection string]
JWT_SECRET= [Your JWT secret key]
PORT= [Your backend server port]

# Cloudinary Configuration
CLOUD_NAME= [Your Cloudinary cloud name]
API_KEY= [Your Cloudinary API key]
API_SECRET= [Your Cloudinary API secret]
```

### Frontend (.env file):
```
REACT_APP_SERVER_DOMAIN= [Backend server domain]
```

---

Ensure that these environment variables are correctly set in your deployment environment to avoid connectivity issues.
