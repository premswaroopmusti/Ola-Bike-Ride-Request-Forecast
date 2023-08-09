# Ola-Bike-Ride-Request-Forecast

The ride-hailing (Ola) service sector has been expanding for a few years, and it is anticipated to continue expanding in near future. Ola drivers must decide where to wait for passengers since they may arrive rapidly. Additionally, passengers like an immediate bike service whenever required. People who have issues with booking Ola bikes, which sometimes cannot be fulfilled or the wait time for the arrival of the trip is particularly lengthy owing to the lack of a nearby Ola bike. If you successfully reserve an Ola bike in one go, consider yourself fortunate.
The percentage of Indians who travel by taxi, bus, or rail is among the highest in the world and few of the Indians 1.4 million residents own automobiles. The leading ride-hailing business in Bangalore, Ola, handles more than 1 lakh rides daily and gathers more than 5GB of data.

## Problem Statement – 

We must develop a model to forecast supply and demand mismatches using information from the leading ride-hailing company in Bangalore. 
This model is based on users' ride request dataset that is proposed to address these problems; it would include characteristics such as ride booking time, season, and weather, temp, humidity, windspeed, number of non-registered user rentals initiated, number of registered user rentals initiated, number of ride request raised on the app for that hour. 

## Proposed Work

Ride hailing companies (such as Ola) are losing money and market share to their competitors, due to their failure to satisfy the trip demands of many consumers. To solve this issue, a novel model is presented out to predict ride-request for a particular hour using machine learning.

### Dataset:

The data set used in this study was a ride request dataset. This dataset would have the following attributes: ride booking time, season, and weather, temp, humidity, windspeed, number of non-registered user rentals initiated, number of registered user rentals initiated, number of ride request raised on the app for that hour. Explanation for the column names in the dataset and their values is as follows:

#### season-
 
1.	spring
   
2.	summer
	
3.	fall
	
4.	winter
   
#### weather-

1.	Clear, Few clouds, Partly cloudy, Partly cloudy
   	
2.	Mist + Cloudy, Mist + Broken clouds, Mist + Few clouds, Mist
	
3.	Light Snow, Light Rain + Thunderstorm + Scattered clouds, Light Rain + Scattered clouds
  
4.	Heavy Rain + Ice Pallets + Thunderstorm + Mist, Snow + Fog

#### casual –

number of non-registered user rentals initiated

#### registered – 

number of registered user rentals initiated

#### count – 

number of ride request raised on the app for that hour.

## Data Preparation: 

There are times when multiple features are provided in the same feature or we must derive some features from the existing ones. I will also try to include some extra features in our dataset so, that we can derive some interesting insights from the data we have. Also, if the features derived are meaningful then they become a deciding factor in increasing the model’s accuracy significantly.

## Exploratory Data Analysis

EDA is an approach to analysing the data using visual techniques. It is used to discover trends,and patterns,or to check assumptions with the help of statistical summaries and graphical representations. 

I will add some features to our dataset using some assumptions. And will also check what are the relations between different features with the target feature.

## Model Training
	
Will separate the features and target variables and split them into training and the testing data by using which I will select the model which is performing best on the validation data.

I will split the data into training and validation data also the normalization of the data will be done. I will train some state-of-the-art machine learning models and select the best out of them using the validation dataset.


## Purpose – 

It has become important for Ola (and other e-haling) company to forecast the demand for their Ola bikes so that they may better understand that demand and maximize the efficiency of their fleet management.
This model will try to predict ride-request for a particular hour using machine learning, assisting the business in maximizing the density of Ola bikes to meet consumer demand.

![image](https://github.com/premswaroopmusti/Ola-Bike-Ride-Request-Forecast/assets/106238419/c23f0981-f2a7-44c9-8373-de4cf7966c26)

In Above DFD level-1 Diagram show that we are going to use the Dataset which we will provide to Machine Learning model and we will save the trained model as .pkl file. Flask Server will interact with the .pkl file

## Planning – 

### Phase-1 (Training machine learning model) – 

#### Training model using RandomForestRegressor - 

Downloaded the Ola dataset from Kaggle. We have 12 different features. Trained the model using these features using Random Forest Regressor. Saved the model as .pkl file. Created a Flask server which we will run on top of this exported .pkl file.

### Phase-2 (Frontend) – 

(Flask Server)

User Interface –
    
![image](https://github.com/premswaroopmusti/Ola-Bike-Ride-Request-Forecast/assets/106238419/2cf71a7c-c116-4cf6-9723-87c9e9369da7)

Click Send to get Predicted count.

![image](https://github.com/premswaroopmusti/Ola-Bike-Ride-Request-Forecast/assets/106238419/2aeb093e-20b7-4f63-91d8-421d7119a45c)

## Integration – 
		
In this integration part we are going to how the whole model or project will be integrated. 
-	Download the Ola dataset from Kaggle. 
-	We have 12 different types of features. Train the model using these features using RandomForestRegressor. 
-	Save the model as .pkl file
-	Create a flask server which we will run on top of this exported .pkl file.
-	We will use Postman to call the Flask server.

