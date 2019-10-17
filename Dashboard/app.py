import os

import pandas as pd
import numpy as np
import json

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/CleanAverageDroughtData_20102019.sqlite"
db = SQLAlchemy(app)

Base = automap_base()
Base.prepare(db.engine, reflect=True)

print(Base.metadata.tables.keys())
print(Base.classes)
drought_data = Base.classes.Drought_data

# df = pd.read_csv('db/CleanAverageDroughtData_2010-2019.csv')


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/data")
def data():
    stmt = db.session.query(drought_data).statement
    df = pd.read_sql_query(stmt, db.session.bind)
    print(df.head())
    return jsonify(df.to_dict(orient='records'))


if __name__ == "__main__":
    app.run()
