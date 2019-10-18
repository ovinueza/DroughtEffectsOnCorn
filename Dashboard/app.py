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


@app.route("/planted")
def planted():
    return render_template("planted.html")


@app.route("/yield")
def yeild():
    return render_template("yield.html")


@app.route("/states")
def states():

    return render_template("states.html")


@app.route("/drought")
def drought():
    return render_template("drought.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/data")
def data():
    stmt = db.session.query(drought_data).statement
    df = pd.read_sql_query(stmt, db.session.bind)
    print(df.head())
    return jsonify(df.to_dict(orient='records'))


if __name__ == "__main__":
    app.run()
