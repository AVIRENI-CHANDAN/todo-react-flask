from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///todo_sqlite.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


# Database models
# ----------------------------------------------------------------
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.String(500))
    completed = db.Column(db.Boolean)

    def __init__(self, title, description, completed=False):
        self.title = title
        self.description = description
        self.completed = completed

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "completed": self.completed,
        }


# Api routes
# ----------------------------------------------------------------
@app.route("/task", methods=["GET", "POST"])
def todos():
    if request.method == "GET":
        todos = Todo.query.all()
        return jsonify([todo.to_dict() for todo in todos])
    elif request.method == "POST":
        title = request.json.get("title")
        description = request.json.get("description")
        completed = request.json.get("completed", False)
        todo = Todo(title, description, completed)
        db.session.add(todo)
        db.session.commit()
        return jsonify(todo.to_dict())


@app.route("/task/<int:id>", methods=["GET", "PUT", "DELETE"])
def todo_detail(id):
    todo = Todo.query.filter_by(id=id).first_or_404()
    if request.method == "GET":
        if todo is None:
            return jsonify({"error": "Todo not found"}), 404
        return jsonify(todo.to_dict()), 200
    elif request.method == "PUT":
        title = request.json.get("title")
        description = request.json.get("description")
        completed = request.json.get("completed")
        todo.title = title or todo.title
        todo.description = description or todo.description
        todo.completed = completed if isinstance(completed, bool) else todo.completed
        db.session.commit()
        return jsonify(todo.to_dict())
    elif request.method == "DELETE":
        db.session.delete(todo)
        db.session.commit()
        return "", 204
