import mysql from 'mysql2/promise';

async function createTable() {
  const uri = process.env.DATABASE_URL || 'mysql://root:@127.0.0.1:3306/healnet_db';
  const connection = await mysql.createConnection(uri);
  
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    await connection.execute(query);
    console.log("Messages table created successfully!");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    await connection.end();
  }
}

createTable();
