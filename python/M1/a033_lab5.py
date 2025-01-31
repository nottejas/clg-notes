#!/usr/bin/env python
# coding: utf-8

# In[3]:


pip install pandas


# In[4]:


pip install numpy


# In[7]:


import pandas as pd 
import numpy as np


# In[9]:


data = pd.read_csv("C:/Users/mpstme.student/Downloads/Housing (1).csv")


# In[10]:


data.head(10)


# In[11]:


data.tail(10)


# In[14]:


data.shape


# In[12]:


data.info()


# In[15]:


data.describe()


# In[16]:


data.nunique()


# In[17]:


data.isnull().sum()


# In[18]:


(data.isnull().sum()/(len(data)))*100


# In[24]:


data_numerical_features=data.select_dtypes(include='number')
data_catagorical=data.select_dtypes(include=['category','object'])


# In[22]:


data_numerical_features


# In[25]:


data_catagorical


# In[26]:


data1=pd.read_csv("C:/Users/mpstme.student/Downloads/mba_decision_dataset.csv")


# In[28]:


data1.head(10)


# In[29]:


data1.tail(10)


# In[31]:


data1.shape


# In[32]:


data1.info()


# In[34]:


data1.describe()


# In[35]:


data1.nunique()


# In[36]:


data1.isnull().sum()


# In[38]:


(data1.isnull().sum()/(len(data)))*100


# In[39]:


data_numerical_features=data1.select_dtypes(include='number')
data_catagorical=data1.select_dtypes(include=['category','object'])


# In[41]:


data_catagorical


# In[40]:


data_numerical_features

