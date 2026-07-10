import mysql from 'mysql2/promise';

async function createTable() {
  const uri = process.env.DATABASE_URL || 'mysql://root:@127.0.0.1:3306/healnet_db';
  const connection = await mysql.createConnection(uri);
  
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS services (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        description TEXT,
        content LONGTEXT,
        hero_image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;
    
    await connection.execute(query);
    console.log("Services table created successfully!");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    await connection.end();
  }
}

createTable();
