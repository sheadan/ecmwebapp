#!/usr/bin/python

import sys
from pymongo import MongoClient
from bson.objectid import ObjectId


#Database setup
client = MongoClient()
db = client.experiments_test

#Expected usage:

#Pull in value from cmd line argument as ID entry.
entry_id = str(sys.argv[1])
#should *probably* do an error check


'''
STILL NEED TO ADD ACCESSING EXISTING VALUES HERE!!!
'''


#AFTER doing data analysis, this can be used to set the values of the data arrays
result = db.cyclicvoltammograms.update(
    { "_id" : ObjectId(entry_id) },
    { "$set": {
            "data.t" : ["array with time values"],
            "data.V" : ["array with voltage values"],
            "data.I" : ["array with current values"]
     } } )
)


'''
Notes for self:

#for finding all entries with specified ID number, returned in Cursor instance
entry_id = "String" #supply id string
desired_entries = db.cyclicvoltammograms.find( { "_id" : ObjectId(entry_id) } )

#for finding entries missing a specified field, returned in Cursor instance
missing_field = "String" #supply id string
desired_entries = db.cyclicvoltammograms.find( { missing_field : None } )

'''
