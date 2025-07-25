# 🔗 Mini URL Shortener

A simple and functional URL shortener built using **Node.js**, **Express**, **MongoDB**, and **EJS**.

## 🚀 Features

- Shortens long URLs to easy-to-share short links
- Tracks and displays visit count for each short link
- Clean and responsive UI using EJS templates
- Clickable redirect URLs in history table

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, HTML/CSS
- **Database**: MongoDB with Mongoose


## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/Anish-gthub/Mini_URL_Shortener.git
cd Mini_URL_Shortener
```
### 2.Install Dependencies
```
npm install
```
### 3.Set Up MongoDB
```
mongoose.connect('mongodb://localhost:27017/urlShortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```
### 4.Start the Server
```
node index.js
```
### 5.Open Browser and type
```
http://localhost:6001
```
