from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, DateTimeField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange


class RatingForm(FlaskForm):
  author_id = IntegerField("author_id", validators=[DataRequired()])
  songsheet_id = IntegerField("songsheet_id", validators=[DataRequired()])
  rating = FloatField("rating", validators=[DataRequired(), NumberRange(min=1, max=5, message="Rating must be between 1 and 5")])
  comment = StringField("comment", validators=[DataRequired()])
  created_at = DateTimeField('created_at', validators=[DataRequired()])
  updated_at = DateTimeField('updated_at', validators=[DataRequired()])
