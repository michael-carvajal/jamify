from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField, StringField, IntegerField
from app.api.aws_helpers import ALLOWED_EXTENSIONS

class DemoForm(FlaskForm):
    demo = FileField("demo File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    name = StringField("name")
    author_id = IntegerField("author_id")

    submit = SubmitField("Create Post")
