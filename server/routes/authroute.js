class User {
    constructor(username, birthdate, age, email, password) {
      this.username = username;
      this.birthdate = birthdate;
      this.age = age;
      this.email = email;
      this.password = password; // sendes aldri ut
      this.valid = false;
    }
    toPublic() {
      return {
        username: this.username,
        birthdate: this.birthdate,
        age: this.age,
        email: this.email,
        valid: true
      };
    }
  }
  
  // Matcher login.ts
  const users = [
    new User('rasmus',  '2001-01-01', 23, 'rasmus@example.com', 'rasmus123'),
    new User('chungus', '2000-06-12', 24, 'chungus@gmail.com',  '123'),
    new User('seal',    '1999-11-30', 25, 'seal@example.com',   'seal')
  ];
  
  module.exports = {
    route: (app) => {
      app.post('/api/auth', (req, res) => {
        const { email, username, password } = req.body || {};
        const found = users.find(u =>
          (u.email === email || u.username === username) &&
          u.password === password
        );
        if (found) return res.json(found.toPublic());
        return res.json({ valid: false });
      });
    }
  };
  