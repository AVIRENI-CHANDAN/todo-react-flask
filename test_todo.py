import unittest
from app import app, db, Todo

class TestTodo(unittest.TestCase):
    app = None
    def setUp(self):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
        app.config['TESTING'] = True
        self.app = app.test_client()
        self.app.application.app_context().push()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
    
    def test_create_todo(self):
        response = self.app.post('/task', json={'title': 'Test todo', 'description': 'Test todo description'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['title'], 'Test todo')
        self.assertEqual(response.json['description'], 'Test todo description')
        self.assertFalse(response.json['completed'])
        
        response = self.app.post('/task', json={'title': 'Test todo', 'description': 'Test todo description', 'completed': True})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['title'], 'Test todo')
        self.assertEqual(response.json['description'], 'Test todo description')
        self.assertTrue(response.json['completed'])

    def test_get_todos(self):
        todo1 = Todo(title='Test todo 1', description="Test description 1")
        todo2 = Todo(title='Test todo 2', description="Test description 2", completed=True)
        db.session.add_all([todo1, todo2])
        db.session.commit()

        response = self.app.get('/task')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json), 2)
    
    def test_update_todo(self):
        with app.app_context():
            todo = Todo(title='Test todo', description="Test description")
            db.session.add(todo)
            db.session.commit()

            response = self.app.put(f'/task/{todo.id}', json={'title': 'Updated todo', 'completed': True})
            self.assertEqual(response.status_code, 200)
            print(response.json)
            self.assertEqual(response.json['title'], 'Updated todo')
            self.assertEqual(response.json['description'], 'Test description')
            self.assertTrue(response.json['completed'])
            
            response = self.app.put(f'/task/{todo.id}', json={'title': 'Updated 2 todo', 'completed': False})
            self.assertEqual(response.status_code, 200)
            print(response.json)
            self.assertEqual(response.json['title'], 'Updated 2 todo')
            self.assertEqual(response.json['description'], 'Test description')
            self.assertFalse(response.json['completed'])

    def test_delete_todo(self):
        with app.app_context():
            todo = Todo(title='Test todo', description="Test description")
            db.session.add(todo)
            db.session.commit()

            response = self.app.delete(f'/task/{todo.id}')
            self.assertEqual(response.status_code, 204)
            self.assertIsNone(Todo.query.get(todo.id))
            
            response = self.app.get(f'/task/{todo.id}')
            self.assertEqual(response.status_code, 404)
    
    def test_get_todo(self):
        with app.app_context():
            todo = Todo(title='Test todo', description="Test description")
            print(todo)
            db.session.add(todo)
            db.session.commit()

            response = self.app.get(f'/task/{todo.id}')
            print(todo)
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response.json['title'], 'Test todo')
            self.assertFalse(response.json['completed'])
