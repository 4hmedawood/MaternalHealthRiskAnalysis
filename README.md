# MaternalHealthRiskAnalysis

Data has been collected from different hospitals, community clinics, maternal health cares through the IoT based risk monitoring system.


Age: Age in years when a woman is pregnant.

SystolicBP: Upper value of Blood Pressure in mmHg, another significant attribute during pregnancy.

DiastolicBP: Lower value of Blood Pressure in mmHg, another significant attribute during pregnancy.</br>

BS: Blood glucose levels is in terms of a molar concentration, mmol/L.

Body Temprature :

HeartRate: A normal resting heart rate in beats per minute.

Risk Level: Predicted Risk Intensity Level during pregnancy considering therevious attribute.

1. Problem Identification
Many pregnant women die from complications of pregnancy because of not having enough information about maternal health care during pregnancy and post-pregnancy,so it is essential to monitor changes since the beginning which can help to reduce the preventable death of pregnant women and neonatal.
In this notebook, we will analyze several attributes that affect the health of pregnant women. We will also create a machine learning model to predict the level of health risk for pregnant women.

Conducted comprehensive data analysis on a maternal health dataset, encompassing exploratory data analysis (EDA), univariate, and bivariate analyses to identify key health indicators and risk factors.

Preprocessed and cleaned dataset by handling outliers, removing irrelevant features, and encoding categorical variables to improve data quality and model performance.

Developed and evaluated a Random Forest classifier to predict maternal health risk levels, achieving a test accuracy of 81% and a cross-validation mean score of 82%.

Visualized data distributions and relationships using histograms, box plots, and heatmaps to uncover insights into the impact of variables like age, blood pressure, and glucose levels on risk levels.

Implemented model improvement techniques including feature selection and outlier removal, resulting in enhanced model accuracy and robustness.


Conclusion
After performing Analysis on the dataset ,we can conclude that women who have high blood glucose level tend to have high health risks.BS also has strong correlation with Age,SystolicBP and Diastolic Bp.
Age is also important variable,where health risk starts to increases after 25 years of age.
SystolicBP and DistolicBP have a strong relationship, with correlation value of 0.79.
Body temprature is not giving much information but most of the women here have 98F ,woen above this temprature tend to have a higher risk.
About Heartrate is it the lest helpful feature in determining the health risks.

we used 4 algorithms to find out the best accuracy for our model.
(1)firstly we used Random Forest algorithm to the dataset, we got accuracy of 82.24% to make sure of our models performance we used cross validation with 5 k-folds,the scores represents how well does Rf perfforms on different subsets of each fold with mean score of 0.82.
(2)we then used the support vector machine algorithm that gave us 71% of accuracy.
(3)Next we used the Decision Tree algorithm which provided with the accuracy of 82.56%.
(4)Lastly we trie the KNN algorithm which gave us the accuracy of 71.48%

we are getting the best accuracy with our two algorithms i.e, RF algorithm and Decision tree algorithm both almost show similar accuracy of 82%, we can choose any one from them for further use.
