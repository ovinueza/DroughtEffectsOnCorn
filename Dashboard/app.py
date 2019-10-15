import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/CleanAverageDroughtData_20102019.sqlite"
# db = SQLAlchemy(app)

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(db.engine, reflect=True)

# # Save references to each table
# drought_data = Base.classes.CleanAverageDroughtData_20102019


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/data")
def data():
    stmt = db.session.query(drought_data).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    return jsonify(list(df.columns)[:])


@app.route("/map")
def map():
    return render_template("map.html")


if __name__ == "__main__":
    app.run()
