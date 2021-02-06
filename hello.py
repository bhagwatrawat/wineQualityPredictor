#!/usr/bin/env python
import pandas as pd
import sys 
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier
import scipy
import pickle
import gzip


# model related variables
	# load saved model from web app root directory
	
 
fixed_acidity = float(sys.argv[2])
volatile_acidity = float(sys.argv[3])
citric_acid = float(sys.argv[4])
residual_sugar = float(sys.argv[5])
chlorides = float(sys.argv[6])
free_sulfur_dioxide = float(sys.argv[7])
total_sulfur_dioxide = float(sys.argv[8])
density = float(sys.argv[9])
pH = float(sys.argv[10])
sulphates = float(sys.argv[11])
alcohol = float(sys.argv[12])
color = int(sys.argv[1])


# create data set of new data
gbm_model = None
features = ['fixed acidity',
			 'volatile acidity',
			 'citric acid',
			 'residual sugar',
			 'chlorides',
			 'free sulfur dioxide',
			 'total sulfur dioxide',
			 'density',
			 'pH',
			 'sulphates',
			 'alcohol',
			 'color']

x_test_tmp = pd.DataFrame([[fixed_acidity,
    volatile_acidity,
    citric_acid,
    residual_sugar,
    chlorides,
    free_sulfur_dioxide,
    total_sulfur_dioxide,
    density,
    pH,
    sulphates,
    alcohol,
    color]], columns = features)

# predict quality based on incoming values
gbm_model = pickle.load(open("gbm_model_dump.p",'rb'))
preds = gbm_model.predict_proba(x_test_tmp[features])
# get best quality prediction from original quality scale
predicted_quality = [3,6,9][np.argmax(preds[0])]
print(predicted_quality)


